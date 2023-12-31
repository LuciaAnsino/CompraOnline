# Imagen base del contenedor

Vamos a diseñar, usando una herramienta de compilación y gestión de imágenes de contenedores, una imagen con la que se puedan ejecutar fácilmente los tests unitarios sobre la aplicación que se está diseñando. Para ello, es esencial elegir la imagen base de la que partiremos.


## Criterios

Para elegir la imagen base que usaré para el proyecto, valoraré cuál es la mejor opción basandome en los siguientes criterios:

+ **Tamaño**: Los contenedores suelen usar mucho espacio, por lo que nos interesa que el tamaño del contenedor sea el mínimo posible.

+ **Compatibilidad**: La imagen debe de ser compatible con nuestras herramientas y se priorizarán aquellas imagenes las cuales contengan ya la mayor cantidad de las herramientas que usamos.

+ **Buen mantenimiento**: Evitar aquellas imagenes que estén obsoletas, es decir, la imagen elegida debe de tener actualizaciones frecuentes y un buen manetenimiento.

**Seguridad**: es ideal que la imagen sea segura para proteger asi la información y contenido recabado de los usuarios.


## Opciones
+ [node](https://hub.docker.com/_/node), es la imagen base oficial de Node.js esta basada en Debian. Por lo que es actualizada regularmente (su última actualización fue hace 2 meses) y tiene un tamaño de 399MB.

+ [node:alpine](https://hub.docker.com/_/alpine), es una variante de la imagen de node, es decir, a la imagen node se le pueden añadir una serie de etiquetas para adaptar la imagen según lo que se desee. En este caso la etiqueta alpine es ideal cuando se desea reducir el tamaño, ya que es muy livina (3,4MB). Además, fue actualizada hace 3 días, pero su principal problema es que es muy vulnerable.

+ [debian:bookworm-slim](https://hub.docker.com/_/debian), requiere que instalemos NOde.js y pnpm, no obstante su tamaño es menor y solo instalamos las herramientas fundamentales.

+ [Fedora](https://hub.docker.com/_/fedora), es una imagen que no contiene por defecto Node.js no obstante se podría instalar. Su tamaño es de 64.9 MB y la última vez que fue actualizada fue hace 5 días.

## Decisión final
Considero que lo mejor es usar la imagen de debian ya que de inicio solo instalamos lo básico y necesario del sistema operativo y solo se tendrá que añadir lo indispensable Node.js y pnpm.