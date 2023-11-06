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
Para mi proyecto creo que la elección más conveniente es **Deno**. Ya que considero que es un punto intermedio entre Node y Bun, es decir; Bun es demasiado reciente en mi opinión y su inestabilidad, la probabilidad aunque pequeña posible de que puediera quedarse atascado y la comunidad tan pequeña al ser tan nuevo son factores que me impiden elegirla. Por otro lado, Node es más conveniente para un proyecto con un enfoque distinto al mío y aunque el problema de la CPU no afectaría seriamente a mi proyecto ya que no tiene gran carga computacional, requiere de mayor cantidad de recursos que sus competidores y no trabaja directamente con Typescript. Debido a esto y que deno es moderno pero lleva más tiempo que Bun (es más estable), es más rápido que node, me resulta más comodo su gestor de dependencias y sobre todo me proporciona mayor seguridad en el poryecto que los otros, como en mi proyecto se manejan con datos del día a día de los clientes me parece muy interesante que tenga cierto nivel de seguridad; lo que me lleva a elegirlo para mi proyecto.