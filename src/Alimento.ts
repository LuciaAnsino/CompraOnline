/**
 * Clase Alimento
 */

class Alimento {
    private readonly nombre: string;
    private readonly cod_alimento: number;

    /**
     * Constructor de la clase Alimento
     * @param nombre Nombre del alimento
     * @param cod_alimento Código del alimento
     */
    constructor(nombre: string, cod_alimento: number) {
        this.nombre = nombre;
        this.cod_alimento = cod_alimento;
    }
}
