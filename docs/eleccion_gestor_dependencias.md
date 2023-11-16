# Gestor de dependencias

Es importante el uso de un gestor de dependencias, ya que facilita la gestión y el manejo de las bibliotecas, módulos, paquetes o dependencias externas que un proyecto de software utiliza. Su función principal es administrar la instalación, actualización, eliminación y resolución de dependencias, simplificando así el proceso de desarrollo de software.

## npm

Al ser el gestor de paquetes predeterminado para Node.js al tener Node.js, ya está instalado. Sin embargo, puede generar una carpeta node_modules relativamente grande y no ofrece una solución directa para el problema de la redundancia de dependencias. Por otro lado, tiene una la comunidad, lo cual nos proporciona una gran cantidad de información y documentación de este gestor y es actualizado frecuentemente.

## Yarn

Este gestor destaca con respecto a npm por su velocidad de instalación. Además resuelve los problemas de redundancia de dependencias con su algoritmo de resolución de dependencias. Aunque el tiempo necesario para aprender su funcionamiento puede ser ligeramente mayor que npm. No obstante, su comunidad es menor que la de npm por lo que posee menos documentación e información, las actualizaciones se hacen con menos frecuencia que las de npm, es más pesado en cuanto a recursos y necesita más espacio en disco.


## pnpm

Este gestor comparado con los otros, ahorra más espacio en disco, ya que adopta un método de alamacenamiento que permite la reutilización de paquetes, por lo que solo mantiene en disco una única versión de un paquete en el sistema. Además es más rápido en la instalación que npm y yarn, puesto que para la instalación de paquetes no descarga todas sus dependencias, solo las necesarias para ejercutar los binarios. Aparte puede usar el archivo 'package.json'.

Pero, algunas herramientas que funcionan con npm o yarn pueden necesitar ajustes para ser compatibles y la documentación y comunidad son más limitadas.


## Decisión final
Para mi proyecto usaré el gestor de dependencias  **pnpm**, ya que disminuye considerablemente el espacio necesario en disco y es más rápido que sus competidores. No obstante respecto a los otros gestores tiene menor documentación, pero sigue teniendo una amplia comunidad que va creciendo asi que no es dificil encontrar información sobre él.