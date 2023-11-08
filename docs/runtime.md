# Runtime

Siguiendo los criterios elegidos, debemos de tener en cuenta de inicio el lenguaje sobre el que trabajaremos, en este caso como se comentó en #5 este será Typescript. Por lo que hay que tener en cuenta que Typescript es una extensión de Javascript que ofrece verificación estática de errores sin necesidad de ejecutarlo. Además, hay que tener en cuenta que para ejecutar un fichero TS se debe de realizar una transpilación previa para convertirlo a JS y poder ejecutarlo con algún runtime de JS.

Hay diferentes runtime de JS:

## Node.js
Podemos encontrar toda la información de este runtime en [Node.js](https://nodejs.org/en/)

Este runtime tiene soporte para Typescript y permite usar el mismo lenguaje en front-end y back-end. Debido a que fue creado hace 14 años y es muy popular tiene una comunidad muy grande, lo que facilita encontrar diversa información de este (como resolución de errores). Además, gracias a esto hay un amplio abanico de bibliotecas y módulos compatibles con Typescript.

No obstante, para Typescript primero habría que transcribirlo a Javascript para que node lo ejecute y algunas de las bibliotecas de Node pueden necesitar de ajustes de integración para usarse con Typescript. También, puede necesitar muchos recursosy se ejecuta unicamente en un subproceso lo que limita su rendimiento cuando hay un uso intensivo de la CPU, que no sería nuestro caso.


## Bun
Podemos encontrar toda la información de este runtime en [Bun](https://bun.sh/).

Este runtime es el más reciente de todos y fue creado como solución completa para la ejecución de Javascript. También, ejecuta Typescript de forma nativa, tiene buena compatibilidad con Node y muy buen rendimiento, prestaciones en velocidad mucho mayores que el resto de runtimes.

No obstante, la versión más reciente (1.0), fue creada en septiembre, por lo que la comunidad es muy pequeña dificultando la resolución de fallos entre otros. Otra desventaja de su juventud es que precisamente debido a ella es todavía inestable y está la incertidumbre de si tendrá futuro o se quedará atascado.

## Deno
Podemos encontrar toda la información de este runtime en [Deno](https://deno.com/)

Este runtime soporta Typescript sin necesidad de transpilarlo, arregla algunos errores de Node y fue construido pensando en la seguridad. Además, no necesita gestor de dependencias, ya que importa módulo por URL y es aproximadamente el doble de rápido que Node.

Sin embargo, la comunidad es más pequeña que la de node, puesto a que es menos popular y más moderno, aunque es un poco más antiguo que Bun y su rendimiento menor que su actual competidor.

## Decisión final
Para mi proyecto creo que la elección más conveniente es **Node.js**. Ya que considero que al tener una gran comunidad me facilitará el desarrollo del proyecto. Además, como el proyecto no tiene una gran carga computacional no será un problema el uso de la CPU. Pese a que los otros tengan mejores prestaciones, como el proyecto es pequeño no habrá ningún problema.