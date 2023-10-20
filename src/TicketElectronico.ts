/**
 * Clase TicketElectronico
 */

class TicketElectronico {
    private cod_ticket: number;
    private fecha_compra: Date;
    private alimentos: Alimento[];
    private precio_compra: number;
    private precio_alimento: number; // Cantidad x precio unidad

    /**
     * Constructor de la clase TicketElectronico
     * @param cod_ticket Código del ticket
     * @param fecha_compra Fecha de la compra
     * @param alimentos Alimentos comprados
     * @param precio_compra Precio total de la compra
     * @param precio_alimento Precio total de cada alimento
     */
    constructor(cod_ticket: number, fecha_compra: Date, alimentos: Alimento[], precio_compra: number, precio_alimento: number) {
        this.cod_ticket = cod_ticket;
        this.fecha_compra = fecha_compra;
        this.alimentos = alimentos;
        this.precio_compra = precio_compra;
        this.precio_alimento = precio_alimento;
    }
}