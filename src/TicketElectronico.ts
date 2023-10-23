/**
 * Clase TicketElectronico
 */

class TicketElectronico {
    private readonly cod_ticket: number;
    private fecha_compra: Date;
    private alimentos: Alimento[];
    private cantidad: number;

    /**
     * Constructor de la clase TicketElectronico
     * @param cod_ticket Código del ticket
     * @param fecha_compra Fecha de la compra
     * @param alimentos Alimentos comprados
     * @param cantidad Cantidad de cada alimento
     */
    constructor(cod_ticket: number, fecha_compra: Date, alimentos: Alimento[], cantidad: number) {
        this.cod_ticket = cod_ticket;
        this.fecha_compra = fecha_compra;
        this.alimentos = alimentos;
        this.cantidad = cantidad;
    }
}