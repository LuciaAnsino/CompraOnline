/**
 * Modelo del alimento.
 * Contiene los atributos de un alimento.
 */

export class Alimento {
    private _nombre: string;
    private _cantidad: number;

    constructor( nombre: string, cantidad: number) {
        this._nombre = nombre;
        this._cantidad = cantidad;
    }

    get nombre(): string {
        return this._nombre;
    }

    get cantidad(): number {
        return this._cantidad;
    }
}
