/**
 * Clase ListaElectronica
 */

class ListaElectronica {
    private cod_alimento: number;
    private nombre_alimento: string;
    private cantidad: number;
    private fecha_compra: Date;

    /**
     * Constructor de la clase ListaElectronica
     * @param cod_alimento Código del alimento
     * @param nombre_alimento Nombre del alimento
     * @param cantidad Cantidad de cada alimento
     * @param fecha_compra Fecha de compra del alimento
     */
    constructor (cod_alimento: number, nombre_alimento: string, cantidad: number, fecha_compra: Date) {
        this.cod_alimento = cod_alimento;
        this.nombre_alimento = nombre_alimento;
        this.cantidad = cantidad;
        this.fecha_compra = fecha_compra;
    }
}