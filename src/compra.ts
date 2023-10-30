/**
 * Clase Compra. Esta clase es la que se encarga de gestionar las compras de los alimentos.
 * Es el ticket electrónico de la compra
 */

class Compra {
    private readonly cod_ticket: number;
    private readonly fecha_compra: Date;
    private readonly alimentos: Map<Alimento, number>;

    /**
     * Constructor de la clase Compra
     * @param cod_ticket Código del ticket
     * @param fecha_compra Fecha de la compra
     * @param alimentos Alimentos comprados mapeados a sus cantidades
     */
    constructor(cod_ticket: number, fecha_compra: Date, alimentos: Map<Alimento, number>) {
        this.cod_ticket = cod_ticket;
        this.fecha_compra = fecha_compra;
        this.alimentos = alimentos;
    }
}
