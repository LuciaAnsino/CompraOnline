# Gestor de tareas

El gestor de tareas es una herramienta muy útil y práctica que se encarga de automatizar procesos repetitivos como la compilación del código, optimización de recursos y ejecución de pruebas. Ofreciendo eficiencia, consistencia la capacidad de personalizar scripts.

En general, os gestores de tareas simplifican el desarrollo, asegurando la coherencia en los procedimientos y facilitando la integración con flujos de trabajo más amplios, como la integración continua y el despliegue continuo.

A continuación, hablare de algunos posibles candidatos para usarlos en el proyecto.

## Make

Permite definir reglas, tareas de compilación, pruebas u otras acciones mediante un archivo 'Makefile'.

**Ventajas:**
+ Es muy estable y ampliamente usada en entorno Unix.
+ Es versatil.
+ Debido a su largo tiempo en uso, cuenta con una amplia documentación, ejemplos y recursos disponibles.

**Desventajas:**
+ Sintaxis y lógica poco intuitivas.
+ Hay que configurar las reglas en el 'Makefille' para aprovechar las funcionalidades específicas de Deno.


## npm Scripts

Permite definir scripts definidos en 'package.json' para realizar tareas específicas.

**Ventajas**
+ Los scripts se pueden ejecutar desde a línea de comandos, por lo que no se necesita instalar herraminetas adicionales.
+ Gran cantidad de documentación y recursos.

**Desventajas**
+ En grandes proyectos, resulta difícil manejar y mantener el archivo 'package.json'
+ No proporciona un método directo para reutilizar tareas, da lugar a código repetido
+ Sintaxis compleja para tareas complejas


## Fly

**Ventajas**
+ Sintaxis elegante y concisa, ermite escribir tareas de manera más legible y mantenible al ser siilar a las funciones generadoras de JavaScript.
+ Facilita la ejecución paralela de tareas.
+ Ofrece una amplia gama de plugins y herramientas para facilitar las diferentes tareas de construcción.
+ Permite definir tareas reutilizables.

**Desventajas**
+ Enfoque basado en generadores requiere tiempo adicional para su compresión.
+ Menor comunidad y soporte.


## NPS

Se utiliza para definir y ejecutar tareas comunes en proyectos Deno a través de scripts definidos en un archivo de configuración.

**Ventajas**
+ Soporte para argumentos y composición de scripts, lo que facilita la reutilización de tareas comunes.
+ Integración con npm y herramientas existentes.
+ Sintaxis clara y familiar.
+ Facilita la separación de las tareas en múltiples archivos para una mejor organización y mantenibilidad del código.

**Desventajas**
+ El enfoque modular requiere tiempo adicional para su compresión.
+ Menor cantidad de documentación y recursos


## Elección final
Para mi proyecto, usare el gestor de tareas **NPS**, ya que es compatible con npm, que es el gestor de dependencias que usamos, es más fácil de aprender que fly y nos proporciona varias ventajas que nos facilitarán la realización del proyecto.