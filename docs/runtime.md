# Runtime

Siguiendo los criterios elegidos, debemos de tener en cuenta de inicio el lenguaje sobre el que trabajaremos, en este caso como se comentó en #5 este será Typescript. Por lo que hay que tener en cuenta que Typescript es una extensión de Javascript que ofrece verificación estática de errores sin necesidad de ejecutarlo. Además, hay que tener en cuenta que para ejecutar un fichero TS se debe de realizar una transpilación previa para convertirlo a JS y poder ejecutarlo con algún runtime de JS.

Hay diferentes runtime de JS:

## Node.js
Podemos encontrar toda le información de este runtime en [Node.js](https://nodejs.org/en/)

**Ventajas:**
+ Optimo para manejar un número de solicitudes de forma asíncrona, es decir, maneja muchas conexiones simultáneas con baja latencia.
+ Tiene soporte para Typescript.
+ Amplio abanico de bibliotecas y módulos compatibles con Typescript.
+ Uso del mismo lenguaje en front-esnd y back-end.
+ Creado hace 14 años, teniendo una comunidad muy grande, lo que facilita la resolución de errores.

**Desventajas:**
+ Para Typescript primero habría que transcribirlo a Javascript para que node lo ejecute.
+ Algunas de las bibliotecas de Node pueden necesitar de ajustes de integración para usarse con Typescript.
+ Puede necesitar muchos recursos.
+ Se ejecuta unicamente en un subproceso lo que limita su rendimiento cuando hay un uso intensivo de la CPU.


## Bun
Podemos encontrar toda le información de este runtime en [Bun](https://bun.sh/).

**Ventajas** 
+ Es el más reciente, fue creado como solución completa para la ejecución de Javascript.
+ Muy buen rendimiento, prestaciones en velocidad mucho mayores que el resto de runtimes.
+ Ejecuta Typescript de forma nativa.
+ Buena compatibilidad con Node

**Desventajas**
+ La versión más reciente (1.0), fue creada en septiembre, por lo que la comunidad es muy pequeña dificultando la resolución de fallos entre otros.
+ Inestable debido a que esta muy fresco.
+ Incertidumbre de si tendrá futuro o se quedará atascado.

## Deno
Podemos encontrar toda le información de este runtime en [Deno](https://deno.com/)

**Ventajas**
+ Soporta Typescript sin necesidad de transpilarlo.
+ Arregla algunos errores de Node.
+ Construido pensando en la seguridad. Ejecuta el código en un SandBox impidiendo el acceso del runtime a capas inferiores.
+ No necesita gestor de dependencias, ya que importa módulo por URL.
+ Es aproximadamente el doble de rápido que Node.
+ Última versión en octubre de 2023, creado en 2018

**Desventajas**
+ Comunidad más pequeña que la de node, puesto a que es menos popular y más moderno.
+ Rendimiento menor que su actual competidor.

## Decisión final
Para mi proyecto creo que la elección más conveniente es **Node.js**. Ya que considero que al tener una gran comunidad me facilitará el desarrollo del proyecto. Además, como el proyecto no tiene una gran carga computacional no será un problema el uso de la CPU. Pese a que los otros tengan mejores prestaciones, como el proyecto es pequeño no habrá ningún problema.