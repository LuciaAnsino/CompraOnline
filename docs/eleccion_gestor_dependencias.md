# Gestor de dependencias

Es importante el uso de un gestor de dependencias, ya que facilita la gestión y el manejo de las bibliotecas, módulos, paquetes o dependencias externas que un proyecto de software utiliza. Su función principal es administrar la instalación, actualización, eliminación y resolución de dependencias, simplificando así el proceso de desarrollo de software.

## npm

Al ser el gestor de paquetes predeterminado para Node.js, npm es fácil de aprender y utilizar, minimizando el tiempo dedicado a aprender e implementar este gestor. Además, reduce el número de dependencias innecesarias, ya que posee unos comandos que te permiten visualizar las dependencias, verificar si hay actualizaciones disponibles y permite realizar pruebas después de eliminar una dependencia para asegurarnos que no afecta al proyecto.

Al establecer dependencias de manera clara en el archivo package.json, permite mantener la solidez necesaria sin introducir un extra de complejidad. Por otro lado, tiene una amplia comunidad, lo cual nos proporciona una gran cantidad de información y documentación de este gestor y es actualizado frecuentemente.

## Yarn

Este gestor tiene una rápida instalación de paquetes y garantiza la reproducción exacta de dependencias, en el archivo 'yarn.lock' se proporciona una lista exacta de versiones de paquetes utilizadas, también garantiza la seguridad de las dependencias. Por otro lado, es compatible con npm y permite la instalación de paquetes offline.

No obstante, es más pesado en cuanto a recursos y espacio en disco que necesita y sus actualizaciones son menos frecuentes, lo cual puede no ser beneficioso.


## pnpm

Este gestor ahorra espacio en disco, ya que adopta un método de alamacenamiento que permite la reutilización de paquetes, por lo que solo mantiene en disco una única versión de un paquete en el sistema. Además es más rápido en la instalación que npm y yarn, puesto que para la instalación de paquetes no descarga todas sus dependencias, solo las necesarias para ejercutar los binarios. Aparte puede usar el archivo 'package.json'.

Pero, algunas herramientas que funcionan con npm o yarn pueden necesitar ajustes para ser compatibles y la documentación y comunidad son más limitadas.


## Decisión final
Para mi proyecto usaré el gestor de dependencias  **npm**,ya que hay una gran cantidad de información de este. Además, evito los problemas de espacio en disco que necesito con yarn, ya que de por si node necesita más recursos que otros runtimes. Por otro lado, los ajustes necesarios para algunas herramientas en pnpm requiere de un tiempo de aprendizaje y realización de ajustes que no compensan sus ventajas para las características de este proyecto.