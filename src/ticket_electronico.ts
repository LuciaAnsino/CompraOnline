import { Alimento } from "./alimento";
import * as fs from "fs";
/**
 * Modelo de ticket electronico.
 * Contiene los atributos de un ticket electronico.
 */

export class Ticket{
    private compra: Alimento[];
    private fecha: Date;

    constructor(ruta:string){
        let contiene_info = false;

        if(ruta != " "){
            let info:string|null = this.leerTicket(ruta||" ");
            if (info){
                this.fecha = this.fecha_compra(info);
                this.compra = this.alimento(info);
                contiene_info = true;
            }
        }

        if (contiene_info == false){
            this.compra = [];
            this.fecha = new Date();
        }
    }

    private fecha_compra(ticket:string):Date{
        const expresionFechaCompra: RegExpMatchArray|null = ticket.match(/\s*(\d{2})\/(\d{2})\/(\d{4})\s*/);

        if (expresionFechaCompra){
            const [_, dia, mes, anio] = expresionFechaCompra;
            return new Date(parseInt(anio), parseInt(mes)-1, parseInt(dia)+1);
        }
        else{
            return new Date();
      }
    }

    private alimento(ticket:string):Alimento[]{
        const expresionCantidad: RegExpMatchArray|null = ticket.match(/\n(\d+)\s|\t/g);
        const expresionAlimentos: RegExpMatchArray|null = ticket.match(/\n(\d+)(\s+|\t+)(([A-Za-z]+)[.-]?(\s)?)*[A-Za-z]+/g);

        if (expresionCantidad && expresionAlimentos){
            const cantidad: number[] = this.obtenerCantidad(expresionCantidad);
            const arrayAlimentos: Alimento[] = this.obtenerAlimento(expresionAlimentos,cantidad);
            return arrayAlimentos;
        }
        else{
           return [];
        }
    }

    private obtenerAlimento(array: string[], cantidad:number[]):Alimento[]{
        let alimentos: Alimento[] = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i].match(/(([A-Za-z]+)[.-]?(\s)?)*[A-Za-z]+/);
            if (element){
                const alimento = new Alimento(element[0], cantidad[i]);
                alimentos.push(alimento);
            }
        }
        return alimentos;
    }

    private obtenerCantidad(array: string[]):number[]{
        let cantidad:number[] = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i].match(/\d+/);
            if (element){
                cantidad.push(parseInt(element[0]));
            }
        }
        return cantidad;
    }

    private leerTicket(ruta:string): string{
        let info:string = '';
        try {
            info = fs.readFileSync(ruta, 'utf8');
        } catch (error) {
            console.error(`Error al leer el archivo: ${error}`);
        }
        return info;
    }
}