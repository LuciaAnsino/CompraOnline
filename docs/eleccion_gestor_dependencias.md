# Gestor de dependencias

Es importante el uso de un gestor de dependencias, ya que facilita la gestión y el manejo de las bibliotecas, módulos, paquetes o dependencias externas que un proyecto de software utiliza. Su función principal es administrar la instalación, actualización, eliminación y resolución de dependencias, simplificando así el proceso de desarrollo de software.

## npm

Es el gestor de dependencias que usa por defecto node. Además, es ampliamente utlizado, por lo que hay abundantes recursos, debido a ello ofrece una amplia colección de paquetes. También tiene una sintaxis simple y fácil de aprender, lo que nos ahorrará tiempo y es actualizado con regularidad, lo que nos asegura que no está obsoleto.

Sin embargo, ha enfrentado problemas de seguridad en el pasado, aunque ya está arreglado y puede haber conflictos entre versiones.


## Yarn

Este gestor tiene una rápida instalación de paquetes y garantiza la reproducción exacta de dependencias, en el archivo 'yarn.lock' se proporciona una lista exacta de versiones de paquetes utilizadas, también arantiza la seguridad de las dependencias. Por otro lado, es compatible con npm y permite la instalación de paquetes offline.

No obstante, es más pesado en cuanto a recursos y espacio en disco que necesita y sus actualizaciones son menos frecuentes, lo cual puede no ser beneficioso.


## pnpm

Ahorra espacio en disco al adoptar un enfoque de alamacenamientode único paquete por versión, es más rápido en la instalación que npm y yarn y puede usar el archivo 'package.json'.

Pero, algunas herramientas que funcionan con npm o yarn pueden necesitar ajustes y la documentación y comunidad son más limitadas.


## Decisión final
Para mi proyecto usaré el gestor de dependencias  **npm**, ya que el problema en la seguridad fue arreglado y hay una gran cantidad de información de este. Además, evito los problemas de espacio en disco que necesito con yarn, ya que de por si node necesita más recursos que otros runtimes. Por otro lado, los ajustes necesarios para algunas herramientas en pnpm requiere de un tiempo de aprendizaje y realización de ajustes que no compensa sus ventajas para las características de este proyecto.