/**
 * Clase ListaElectronica. Esta clase es la que se encarga de gestionar los alimentos de la lista de la compra
 */

class ListaElectronica {
    private alimentos: Map<Alimento, [number, Date]>;

    /**
     * Constructor de la clase ListaElectronica
     * @param alimentos Alimentos de la lista de la compra mapeados a sus cantidades y fechas de compra
     */
    constructor(alimentos: Map<Alimento, [number, Date]>) {
        this.alimentos = alimentos;
    }
}