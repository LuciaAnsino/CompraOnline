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


## Velociraptor

Permite definir tareas y scripts en un archivo de configuración, que puede ser 'velociraptor.yml' o 'velociraptor.json'.

**Ventajas**
+ Se centra en la ejecución de scripts y tareas.
+ Compatible con Deno.
+ Configuración sencilla.
+ Facil de ejecutar desde la línea de comandos.

**Desventajas**
+ No está ligado directamente a Deno.
+ Al ser una herramineta externa, agrega una capa adicional al proceso de desarrollo.
+ Última versión publicada hace dos años.


## Drake

Funciona de forma similar a make, se definen las tareas y flujos de trabajo en un archivo de configuración, "Drakefile".

**Ventajas**
+ Sintaxis clara y simple.
+ Permite la creación de tareas específicas para deno.
+ Proporciona flexibilidad en la automatización.
+ Fácil de configurar y utilizar.

**Desventajas**
+ Al tener menor presencia tiene menor cantidad de ejemplos y recursos disponibles.
+ Menor comunidad y soporte.


## Denosk

Se utiliza para definir y ejecutar tareas comunes en proyectos Deno a través de scripts definidos en un archivo de configuración.

**Ventajas**
+ Esta diseñado especificamente para trabajar con deno.
+ Sintaxis clara y simple.
+ En continuo desarrollo, no está obsoleta

**Desventajas**
+ En funcionalidades avanzadas podría tener limitaciones.
+ Menor cantidad de documentación y recursos


## Elección final
Para mi proyecto, usare el gestor de tareas de denosk, debido a que es fácil de implementar, no está obsoleto y puesto que es específico de Deno no tendría que configurarlo, reduciendo asi el tiempo que podría tardar en configurar o aprender el uso de otros gestores.