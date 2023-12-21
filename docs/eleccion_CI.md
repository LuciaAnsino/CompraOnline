# Continuous integration
Los sistemas de CI son una herramienta de software que centraliza todas las operaciones de CI creando un sistema fiable y estable para nuestro proyecto.

## Criteros
Para elegir el CI tendremos en cuenta los siguientes criterios de elección:
+ Debe de ser **gratis** o tener versión de prueba gratis
+ El CI debe de ser **compatible** con Docker y Github
+ Poco usado por los compañeros.
+ Se debe de tener en cuenta que la herramineta usada debe de tener un buen mantenimiento y actualizaciones frecuentes para evitar problemas de seguridad

## Opciones
+ [Github Action](https://docs.github.com/es/actions): Es compatible con Docker de forma nativa y con Github . Además, ofrece una gran cantidad de recursos de forma gratuita y es actualizado con frecuencia.

+ [GitLab](https://docs.gitlab.com/ee/ci/): Tiene actuaizaciones bastante frecuentes, es compatible de forma nativa con Docker al igual que Github Action y es posible integrarlo en repositorios de Github. Además, posee planes gratuitos para usarlo, aunque con ciertas limitaciones.

+ [Travis](https://www.travis-ci.com): Tiene un buen ciclo de actualizaciones, es compatible con Docker y Github. Aunque hay que tener en cuenta que es de pago, pero tiene un formato de prueba gratuito en el que no te pide datos de pago.

+ [TeamCity](https://www.jetbrains.com/teamcity/): Es compatible tanto con Docker como con GitHub. No obtstante tiene una versión con varias restricciones gratuita y otra más completa con un periodo de prueba gratuito. También, cabe destacar que que hace actualizaciones periódicas para aprovechar las nuevas funciones, mejoras y correcciones de seguridad.

## Decisión final
Usaré dos herramientas CI, una de ellas es Github Action y la otra es TeamCity debido a que gracias al tiempo de prueba puedo usarlo durante un periodo de tiempo sin tener que pagar y es una herramienta que no ha sido usada por el resto de los compañeros.