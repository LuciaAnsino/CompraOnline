# Herramientas test

Para la realización del proyecto es necesario testear el código, para ello es conveniente crear tests unitarios y de forma automática ejecutarlos antes de realizar tareas de integración y despliegue continuo. Por lo tanto, debemos de elegir una herramienta de test, que implica elegir una biblioteca de aserciones, un test runner y un CLI para ejecutar los test.

## Criterios de elección

Para la elección de las herramientas tendremos en cuenta los criterios siguientes:
+ Debe de ser **compatible** con Typescript.
+ Se considerará mejor las herramientas que engloben varias funciones.
+ Tendrá preferencia que la herramienta sea compatible con la imagen del contenedor que se usará.
+ Preferencia a gran cantidad de documentación.
+ Tendremos en cuenta la **valoración** en [Snyk Advisor](https://snyk.io/advisor)
+ Tendrá preferencia la herramienta que menos hayan usado otros compañeros.

## Aserciones

+ [Chai](https://www.chaijs.com/): Es el que mayor puntuación tiene de todos con 97. Permite elegir varios estilos de aserciones y tiene una sintaxis bastante legible, lo que permite una mejor compresión de lo que se está realizando.

+ [Assert](https://nodejs.org/api/assert.html): Tiene una puntuación de 86, es el integrado en node.js, por lo que no requiere de una de instalaciones adicionales.

+ [earl](https://earl.fun/): Es el que peor puntuación tiene con una valoración de 70. Se centra en afirmaciones de inmutabilidad, por lo que es muy recomendable cuando se usan estructuras inmutables, no obstante, al tener estar enfocado en la inmutabilidad tiene carencias a la hora de usarlo para pruebas más generales.

## Test runners o frameworks

+ [Jest](https://jestjs.io/): Tiene una puntuación de 92, es robusta compatible con Typescript y tiene una amplia comunidad, lo que indica que hay bastante información. Además, ya tiene una biblioteca de aserciones por lo que no es necesario instalar una. No obstante, hay muchos compañeros que la están usando.

+ [AVA](https://nestjs.com/): Tiene gran cantidad de información, con una puntuación de 94. Además, tiene soporte para Typescript. Además, no tiene una biblioteca incorporada sufiecientemente útil, es mejor usar una biblioteca que se adapte a nuestras preferencias compatible con AVA, como assert o chai.

+ [Mocha](https://mochajs.org/): Es el que menor puntuación tiene (87), es flexible y extensible, es decir, es fácil de personalizar. No obstante, hay que instalar una biblioteca de aserciones, cosa que en otros no es necesario.

+ [Vitest](https://vitest.dev/): Tiene mayor puntuación que todos (98) es el que mejor rendimiento tiene y al ser parte del ecosistema Vite se beneficia de la extensa documentación de este. Además, posee la biblioteca de aserciones chai, por lo que no es necesario instalar una. No obstante, muestra muchos problemas de compatibilidad con los contenedores.

## CLI

Para la ejecución de los test necesitamos elegir un CLI, pero como hemos visto prácticamente todos los test runners mencionados tiene uno ya integrado. Por lo que para la realizaión de la práctica usaré el CLI incorporado en el test runner seleccionado.

## Decisión final

Para mi proyecto usaré **MOCHA**, ya que según los criterios mencionados es el que mejor los cumple, debido a que es compatible con los contenedores, no la ha usado mucha gente y se puede usar la biblioteca de aserciones chai que es una de las mejores valoradas.