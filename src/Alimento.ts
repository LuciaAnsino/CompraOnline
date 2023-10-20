/**
 * Clase Alimento
 */

class Alimento {
    private nombre: string;
    private cod_alimento: number;
    private precio_venta: number;
    private precio_compra: number;
    private fecha_caducidad: Date;

    /**
     * Constructor de la clase Alimento
     * @param nombre Nombre del alimento
     * @param cod_alimento Código del alimento
     * @param precio_venta Precio de venta al público
     * @param precio_compra Precio de compra al proveedor
     * @param fecha_caducidad Fecha de caducidad del alimento
     */
    constructor(nombre: string, cod_alimento: number, precio_venta: number, precio_compra: number, fecha_caducidad: Date) {
        this.nombre = nombre;
        this.cod_alimento = cod_alimento;
        this.precio_venta = precio_venta;
        this.precio_compra = precio_compra;
        this.fecha_caducidad = fecha_caducidad;
    }
}
