import { Alimento } from "./alimento";
import * as fs from "fs";
/**
 * Modelo de ticket electronico.
 * Contiene los atributos de un ticket electronico.
 */

/**
 * Struct de datos relevantes de un ticket electronico.
 */
interface DatosTicketElectronico {
    (alimento: string): Alimento[];
    (fecha_compra: string): Date;
}

export class Ticket implements DatosTicketElectronico{
    private compra: Alimento[];
    private fecha: Date;

    constructor(ruta:string, alimento: Alimento[], fecha_compra: Date){
        let info:string|null = this.leerTicket(ruta);
        if(ruta != " "){
            if( alimento && fecha_compra){
                if (info){
                    this.fecha = this.fecha_compra(info)
                    this.compra = this.alimento(info)
                }else{
                    this.fecha = new Date();
                    this.compra = [];
                }
            }else{
                this.compra = alimento
                this.fecha = fecha_compra
            }
        }else{
            this.compra = alimento
            this.fecha = fecha_compra
        }
        console.log(this.compra);
        console.log(this.fecha);
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
        const expresionCantidad: RegExpMatchArray|null = ticket.match(/(?<=FACTURA SIMPLIFICADA:[^\n]*\n\n)([\s\S]*?)(?=\n\nDescripción)/g);

        const expresionAlimentos: RegExpMatchArray|null = ticket.match(/(?<=Descripción\s*\n)[\s\S]*?(?=\r?\n\s*\r?\n|\r?\n\s*$)/);
  
        if (expresionCantidad && expresionAlimentos){
            const cantidad: number[] = expresionCantidad[0].split("\n").map(cantidad => parseInt(cantidad));
            const productos: string[] = expresionAlimentos[0].split("\n");

            const arrayAlimentos: Alimento[] = [];
            for (let i = 0; i < Math.min(cantidad.length, productos.length); i++) {
                const alimento = new Alimento(productos[i], cantidad[i]);
                arrayAlimentos.push(alimento);
            }
            return arrayAlimentos;
        }
        else{
           return [];
        }
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