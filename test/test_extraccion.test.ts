import { Ticket } from "../src/ticket_electronico";
import { Alimento } from "../src/alimento";
import {expect,describe, it} from 'vitest';

describe("Extracción de información de la relevante de un ticket", () =>{
    it("Extracción completa de datos", () => {

        let prod:Alimento[] = [];
        let fecha:Date = new Date()

        const ticket_electronico = new Ticket("data/20231007-Mercadona-5_89-€.txt",prod,fecha);

        const alimento1 = new Alimento("BEBER FRESA-P", 1);
        prod.push(alimento1);
        const alimento2 = new Alimento("KIWI VERDE", 1);
        prod.push(alimento2);
        const alimento3 = new Alimento("PLATANO", 1);
        prod.push(alimento3);
        const alimento4 = new Alimento("MANZ. ROJA ACIDULCE",1);
        prod.push(alimento4);
        fecha = new Date('2023-10-07T22:00:00.000Z');
        const ticket_esperado = new Ticket(" ", prod,fecha);
        console.log(ticket_esperado)
        console.log(ticket_electronico)
        expect(ticket_esperado).toEqual(ticket_electronico);
    });
});