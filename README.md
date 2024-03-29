# Información de productos comprados

## Problema

Soy una persona que al realizar una compra en un comercio de alimentos donde el ticket es electrónico, debo de pasar de forma manual cada producto comprado a una lista donde veo la comida y la cantidad comprada. Esto es para tener disponible dicha información y evitar comprar alimentos que ya tengo, pero desperdicio mucho tiempo añadiendo a dicha lista la información de cada compra que realizo.

## Descripción de la clase

La entidad Compra es la entidad principal, ya que en ella es donde se realizará la lógica de negocio. En este caso, se encargará de obtener la información que se requiere de una compra obteniendola del ticket electrónico de la compra.

Para ver que la sintaxis es la correcta del código del proyecto, habrá que ejecutar en la terminal el siguiente comando:

```bash
pnpm run check
```

## Ejecución de los test

Para ejecutar los test para la extracción de la información de los tickets electrónicos se puede hacer se la siguiente forma:

```bash
pnpm run test
```

## Contenedor

Para construir la imagen del contenedor debemos de lanzar:

```bash
docker build -t luciaansino/compraonline .
```

Y ejecutamos el contenedor:
```bash
docker run -tv `pwd`:/app/test luciaansino/compraonline
```
La imagen se encuentra en [Docker hub](https://hub.docker.com/repository/docker/luciaansino/compraonline/general)


## Claves de github

![Clave Github](./docs/clave_ssh.png)

## Configuración de nombre y correo electrónico

![Configuracion nombre y correo](./docs/configuracion.png)

## User journey

[User journey](./docs/viaje_usuario.md)

## Historias de usuario

[Historias de usuario](./docs/historias_usuario.md)

## Milestone

[Milestone](./docs/milestone.md)

## Toolchain

* Criterios que se seguirán para la elección: [criterios](./docs/criterios.md)
* Elección del runtime: [runtime](./docs/runtime.md)
* Elección del gestor de dependencias: [gestor de dependencias](./docs/eleccion_gestor_dependencias.md)
* Elección del gestor de tareas: [gestor de tareas](./docs/eleccion_gestor_tareas.md)
* Elección del herramientas para test: [herramientas de test](./docs/eleccion_herramientas_test.md)
* Elección de la imagen base para el contenedor: [imagen base](./docs/eleccion_imagen.md)
* Elección de herramientas CI: [CI](./docs/eleccion_CI.md)