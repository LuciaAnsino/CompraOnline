import { Ticket } from "../src/ticket_electronico";
import { Alimento } from "../src/alimento";
import {expect,describe, it} from 'vitest';

describe("Extracción de información de la relevante de un ticket", () =>{
    it("Extracción completa de datos", () => {

        const ticket_electronico = new Ticket("data/20231007-Mercadona-5_89-€.txt");

        let prod:Alimento[] = [];
        const alimento1 = new Alimento("BEBER FRESA-P", 1);
        prod.push(alimento1);
        const alimento2 = new Alimento("KIWI VERDE", 1);
        prod.push(alimento2);
        const alimento3 = new Alimento("PLATANO", 1);
        prod.push(alimento3);
        const alimento4 = new Alimento("MANZ. ROJA ACIDULCE",1);
        prod.push(alimento4);
        
        const fecha = new Date('2023-10-07T22:00:00.000Z');
        
        console.log(ticket_electronico)
        expect(prod).toEqual(ticket_electronico.compra);
        expect(fecha).toEqual(ticket_electronico.fecha);
    });

    it("Extracción completa de datos", () => {

        const ticket_electronico = new Ticket(" ");

        let prod:Alimento[] = [];        
        const fecha = new Date();
        
        console.log(ticket_electronico)
        expect(prod).toEqual(ticket_electronico.compra);
        expect(fecha).toEqual(ticket_electronico.fecha);
    });
});