# Gestor de tareas

El gestor de tareas es una herramienta muy útil y práctica que se encarga de automatizar procesos repetitivos como la compilación del código, optimización de recursos y ejecución de pruebas. Ofreciendo eficiencia, consistencia la capacidad de personalizar scripts.

En general, os gestores de tareas simplifican el desarrollo, asegurando la coherencia en los procedimientos y facilitando la integración con flujos de trabajo más amplios, como la integración continua y el despliegue continuo.

A continuación, hablare de algunos posibles candidatos para usarlos en el proyecto.

## Make

Permite definir reglas, tareas de compilación, pruebas u otras acciones mediante un archivo 'Makefile'. Debido a su largo tiempo en uso, cuenta con una amplia variedad recursos disponibles, es muy estable, versatil y es ampliamente usada en entorno Unix.

Sin embargo, la sintaxis y lógica son poco intuitivas. También, hay que configurar las reglas en el 'Makefile' para aprovechar las funcionalidades específicas de node, lo cual nos llevaría más tiempo.


## npm Scripts

Permite definir scripts definidos en 'package.json' para realizar tareas específicas. Además, los scripts se pueden ejecutar desde a línea de comandos, por lo que no se necesita instalar herraminetas adicionales y tiene una gran cantidad de documentación y recursos.

No obstante, en grandes proyectos, resulta difícil manejar y mantener el archivo 'package.json' (que no es nuestro caso). La sintaxis compleja para tareas complejas y no proporciona un método directo para reutilizar tareas, da lugar a código repetido.


## Fly

Es un gestor de tareas con una sintaxis elegante y concisa, permite escribir tareas de manera más legible y mantenible al ser similar a las funciones generadoras de JavaScript. Además, facilita la ejecución paralela de tareas y ofrece una amplia gama de plugins y herramientas para facilitar las diferentes tareas de construcción. También, permite definir tareas reutilizables.

Por otro lado, el enfoque basado en generadores requiere tiempo adicional, debido a que es más tedioso de comprender y al tiene menor comunidad es más complicado obtener información de él.


## NPS

Se utiliza para definir y ejecutar tareas comunes en proyectos Deno a través de scripts definidos en un archivo de configuración. Da soporte para argumentos y composición de scripts, lo que facilita la reutilización de tareas comunes Tiene una sintaxis clara y permite la integración con npm y herramientas existentes También, facilita la separación de las tareas en múltiples archivos para una mejor organización y mantenibilidad del código.

Sin embargo, el enfoque modular requiere tiempo adicional para su compresión. Tampoco tiene una gran cantidad de documentación y recursos. Además, al estar desactualizado queda practicamente descartado.


## Elección final
Para mi proyecto, usare el gestor de tareas **npm script**, ya que tiene una alta cantidad de documentación, tiene continuas actualizaciones y sería necesario menos cantidad de tiempo para saber usarlo, ya que también se usa como gestor de dependencias. Además, los inconvenientes que tiene no son realmente un problema para el tipo de proyecto que estamos desarrollando.