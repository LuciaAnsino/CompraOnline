/**
 * Clase ListaElectronica. Esta clase es la que se encarga de gestionar los alimentos de la lista de la compra
 */

class ListaElectronica {
    private readonly cod_alimento: number;
    private readonly nombre_alimento: string;
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