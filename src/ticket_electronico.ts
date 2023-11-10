/**
 * Modelo de ticket electronico.
 * Contiene los atributos de un ticket electronico.
 */

/**
 * Struct de datos relevantes de un ticket electronico.
 */
interface DatosTicketElectronico {
    readonly alimento: Alimento[];
    readonly fecha_compra: Date;
}

class TicketElectronico {
    constructor(
        private datos: DatosTicketElectronico,
    ) {}

    /**
     * Procesa el texto de un ticket electronico y captura la información
     * relevante.
     * @param texto Texto del ticket a procesar.
     * @returns Datos del ticket electronico relevantes.
     */
    capturarInformacion(texto: string): DatosTicketElectronico {
        return this.datos;
    }
}
