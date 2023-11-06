# Gestor de dependencias

Es importante el uso de un gestor de dependencias, ya que facilita la gestión y el manejo de las bibliotecas, módulos, paquetes o dependencias externas que un proyecto de software utiliza. Su función principal es administrar la instalación, actualización, eliminación y resolución de dependencias, simplificando así el proceso de desarrollo de software.

## npm
**Ventajas**
+ Lo usa Node por defecto
+ Permite buscar, instalar, actualizar y eliminar paquetes de software de Node.js
+ Es ampliamente utlizado, por lo que hay abundantes recursos
+ Ofrece una amplia coleeción de paquetes
+ Sintaxis simple y fácil de aprender
+ Es actualizado con regularidad

**Desventajas**
+ Ha enfrentado problemas de seguridad en el pasado
+ Conflictos entre versiones
+ Es más monolítico


## Yarn
**Ventajas**
+ Rápida instalación de paquetes.
+ Garantiza la reproducción exacta de dependencias, en el archivo 'yarn.lock' se proporciona una lista exacta de versiones de paquetes utilizadas.
+ Garantiza la seguridad de las dependencias.
+ Permite la instalación de paquetes offline.
+ Compatible con npm

**Desventajas**
+ Más pesado en cunato a recursos y espacio en disco que necesita.
+ Actualizaciones menos frecuentas


## pnpm
**Ventajas**
+ Ahorra espacio en disco al adoptar un enfoque de alamacenamientode único paquete por versión.
+ Más rápido en la instalación que npm y yarn.
+ Puede usar el archivo 'package.json'

**Desventajas**
+ Algunas herramientas que funcionan con npm o yarn pueden necesitar ajustes.
+ Documentación y comunidad más limitados.


## Decisión final
Para mi proyecto usaré el gestor de dependencias  **npm**, ya que el problema en la seguridad fue arreglado y hay una gran cantidad de información de este. Además, evito los problemas de espacio en disco que necesito con yarn, ya que de por si node necesita más recursos que otros runtimes. Por otro lado, los ajustes necesarios para algunas herramientas en pnpm requiere de un tiempo de aprendizaje y realización de ajustes que no compensa sus ventajas para las características de este proyecto.