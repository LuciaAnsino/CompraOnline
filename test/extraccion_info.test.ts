import { Ticket } from "../src/ticket_electronico";
import { Alimento } from "../src/alimento";
import { expect } from "chai";
import "mocha";

describe("Extracción de información de la relevante de un ticket", () => {
    it("Extracción completa de datos ticket 3", () => {
        const ticket_electronico = new Ticket("data/20231007-Mercadona-5_89-€.txt");

        const compra = ticket_electronico.compra;

        let prod: Alimento[] = [];
        prod.push(new Alimento("BEBER FRESA-P", 1));
        prod.push(new Alimento("KIWI VERDE", 1));
        prod.push(new Alimento("PLATANO", 1));
        prod.push(new Alimento("MANZ. ROJA ACIDULCE", 1));

        const foundFoods = prod.map((producto) =>
            compra.some(
                (alimento) =>
                    alimento.nombre === producto.nombre &&
                    alimento.cantidad === producto.cantidad
            )
        );

        expect(foundFoods).to.deep.equal(Array(prod.length).fill(true));

        const fecha = new Date("2023-10-07T22:00:00.000Z");
        expect(fecha).to.deep.equal(ticket_electronico.fecha);
    });

    it("Extracción completa de datos, ticket incorrecto", () => {
        expect(() => {
            new Ticket("data/Mercadona.txt");
        }).to.throw("Ticket incorrecto, ruta no valida");
    });

    it("Extracción completa de datos, ticket 2", () => {
        const ticket_electronico = new Ticket("data/20230918-Mercadona-10_65-€.txt");
        const compra = ticket_electronico.compra;

        let prod: Alimento[] = [];
        prod.push(new Alimento("BEBER FRESA-P", 1));
        prod.push(new Alimento("LECHE DESN S", 2));
        prod.push(new Alimento("LECHE SEMI", 3));
        prod.push(new Alimento("GOURMET MAXI", 1));
        prod.push(new Alimento("PAN TOST INT ESPELTA", 1));
        prod.push(new Alimento("MELON SAPO PARTIDO", 1));

        const foundFoods = prod.map((producto) =>
            compra.some(
                (alimento) =>
                    alimento.nombre === producto.nombre &&
                    alimento.cantidad === producto.cantidad
            )
        );
        expect(foundFoods).to.deep.equal(Array(prod.length).fill(true));

        const fecha = new Date("2023-09-18T22:00:00.000Z");
        expect(fecha).to.deep.equal(ticket_electronico.fecha);
    });

    it("Extracción completa de datos, ticket 1", () => {
        const ticket_electronico = new Ticket("data/20230915-Mercadona-7_23-€.txt");
        const compra = ticket_electronico.compra;

        let prod: Alimento[] = [];
        prod.push(new Alimento("6 HUEVOS", 1));
        prod.push(new Alimento("PANEC", 1));
        prod.push(new Alimento("MELOCOTON AMARILLO", 1));
        prod.push(new Alimento("BANANA", 1));

        const foundFoods = prod.map((producto) =>
            compra.some(
                (alimento) =>
                    alimento.nombre === producto.nombre &&
                    alimento.cantidad === producto.cantidad
            )
        );
        expect(foundFoods).to.deep.equal(Array(prod.length).fill(true));
        const fecha = new Date("2023-09-15T22:00:00.000Z");
        expect(fecha).to.deep.equal(ticket_electronico.fecha);
    });
});