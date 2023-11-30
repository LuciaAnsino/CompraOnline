import { Alimento } from "./alimento";
import * as fs from "fs";
/**
 * Modelo de ticket electronico.
 * Contiene los atributos de un ticket electronico.
 */

export class Ticket{
    private _compra: Alimento[];
    private _fecha: Date;

    constructor(ruta:string){
        if(ruta == " "){
            throw new Error("Ticket incorrecto, ruta no valida");
        }

        try {
            const info = fs.readFileSync(ruta, 'utf8');
            this._fecha = this.fecha_compra(info);
            this._compra = this.alimento(info);
            console.log(this._fecha);
        } catch (error) {
            throw new Error('No se ha podido leer el ticket');
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
        const alimentos: Alimento[] = array
            .map((element, index) => {
                const match = element.match(/(([A-Za-z]+)[./-]?(\s)?)*[A-Za-z]+/);
                if (match) {
                    return new Alimento(match[0], cantidad[index]);
                }
                return null;
            })
            .filter((alimento) => alimento !== null) as Alimento[];

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

    get compra():Alimento[]{
        return this._compra;
    }

    get fecha():Date{
        return this._fecha;
    }
}