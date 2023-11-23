/**
 * Modelo del alimento.
 * Contiene los atributos de un alimento.
 */

export class Alimento {
    private nombre: string;
    private cantidad: number;

    constructor( nombre: string, cantidad: number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}
