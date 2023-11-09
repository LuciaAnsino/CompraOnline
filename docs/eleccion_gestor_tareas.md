# Gestor de tareas

El gestor de tareas es una herramienta muy útil y práctica que se encarga de automatizar procesos repetitivos como la compilación del código, optimización de recursos y ejecución de pruebas. Ofreciendo eficiencia, consistencia la capacidad de personalizar scripts.

En general, los gestores de tareas simplifican el desarrollo, asegurando la coherencia en los procedimientos y facilitando la integración con flujos de trabajo más amplios, como la integración continua y el despliegue continuo.

A continuación, hablare de algunos posibles candidatos para usarlos en el proyecto.

## Make

Permite definir reglas, tareas de compilación, pruebas u otras acciones mediante un archivo 'Makefile'. Debido a su largo tiempo en uso, cuenta con una amplia variedad recursos disponibles, es muy estable, versatil y es ampliamente usada en entorno Unix.

Sin embargo, la sintaxis y lógica son poco intuitivas. También, hay que configurar las reglas en el 'Makefile' para aprovechar las funcionalidades específicas de node, lo cual nos llevaría más tiempo.


## npm Scripts

Permite definir scripts definidos en 'package.json' para realizar tareas específicas. Además, los scripts se pueden ejecutar desde a línea de comandos, por lo que no se necesita instalar herraminetas adicionales y tiene una gran cantidad de documentación y recursos.

No obstante, en grandes proyectos, resulta difícil manejar y mantener el archivo 'package.json' (que no es nuestro caso). La sintaxis compleja para tareas complejas y no proporciona un método directo para reutilizar tareas, da lugar a código repetido.


## Gulp

Se basa en flujos, lo cual hace que destaque su eficiencia y velocidad en ejecución de tareas, pero esta diseñado para manejar grandes proyectos, que no es el caso del nuestro. Debido a que tiene una sintaxis simple y se enfoca en código, puede aprenderse a usar facilmente. Además, es una herramineta activa, es decir, no está obsoleta.

Por otro lado, tiene un gran comunidad que facilita la búsqueda de recursos informativos. También, se pueden elegir los plugins específicos que se necesiten, con lo que tendríamos solo las dependencias mínimas necesarias.


## Elección final
Para mi proyecto, usare el gestor de tareas **npm script**, ya que tiene una alta cantidad de documentación, tiene continuas actualizaciones y sería necesario menos cantidad de tiempo para saber usarlo, ya que también se usa como gestor de dependencias. Además, los inconvenientes que tiene no son realmente un problema para el tipo de proyecto que estamos desarrollando y se beneficia del uso de las dependencias ya instaladas con npm.