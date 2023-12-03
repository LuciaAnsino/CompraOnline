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

        try {
            const info = fs.readFileSync(ruta, 'utf8');
            this._fecha = this.fecha_compra(info);
            this._compra = this.alimento(info);
        } catch (error) {
            throw new Error("Ticket incorrecto, ruta no valida");
        }

    }

    private fecha_compra(ticket:string):Date{
        const expresionFechaCompra: RegExpMatchArray|null = ticket.match(/\s*(\d{2})\/(\d{2})\/(\d{4})\s*/);

        if (expresionFechaCompra){
            const [_, dia, mes, anio] = expresionFechaCompra;
            return new Date(parseInt(anio), parseInt(mes)-1, parseInt(dia));
        }
        else{
            throw new Error("No se encontró la fecha");
        }
    }

    private alimento(ticket:string):Alimento[]{
        const expresionCantidad: RegExpMatchArray|null = ticket.match(/\n(\d+)\s|\t/g);
        const expresionAlimentos: RegExpMatchArray|null = ticket.match(/\n((\d+)(\s+|\t+))+(([A-Za-z]+)[.-]?(\s)?)*[A-Za-z]+/g);

        if (expresionCantidad && expresionAlimentos){
            const cantidad: number[] = this.obtenerCantidad(expresionCantidad);
            const arrayAlimentos: Alimento[] = this.obtenerAlimento(expresionAlimentos,cantidad);
            console.log(arrayAlimentos);
            return arrayAlimentos;
        }
        else{
            throw new Error("No se encontraron alimentos");
        }
    }

    private obtenerAlimento(array: string[], cantidad:number[]):Alimento[]{
        const alimentos: Alimento[] = array
            .map((element, index) => {
                const match = element.replace(/\n(\d+)(\s+|\t+)/, '');
                console.log(match);
                if (match) {
                    return new Alimento(match, cantidad[index]);
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