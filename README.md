# Proyecto_Final_TS

### Enunciado

Llegados al punto del proyecto final del curso, se sobreentiende que es el momento de poner en
práctica los conocimientos adquiridos a lo largo de todos los módulos. También es el momento en
el cual, con objeto de mejorar el proyecto que elaboremos, podamos investigar otras herramientas
si así lo deseamos.

Es importante tener en cuenta que el proyecto no está definido al 100%, por lo tanto, habrá
decisiones que dependerán directamente del alumno para darle un aporte más personalizado y así
poder mejorar la nota final del mismo. Los resultados de cada proyecto serán diferentes aunque las
herramientas utilizadas sean las mismas.

## ESCENARIO
Acabas de terminar un extenso curso en Desarrollo Blockchain en el centro de estudios Tokio School
y, te has apuntado a la bolsa de empleo que ofrece la escuela. Entre las diferentes ofertas te fijas en
una de la compañía Blockchain TS, la cual tiene que cubrir dos puestos donde el candidato tenga
conocimientos en Blockchain, así como en el estándar ERC20.

Las dos vacantes disponibles indican lo siguiente:

### VACANTE 1:
El candidato deberá ser capaz de generar a través de un desarrollo pares de claves automáticamente
y que actualicen los scripts de despliegue de una red privada OpenEthereum Dockerizada con cuatro
nodos:

  - Un nodo validador
  - Dos nodos no validadores
  - Un nodo RPC

### VACANTE 2:
El candidato deberá ser capaz de realizar un despliegue de un Smart Contract que registre todos los
alumnos que se van matriculando en el centro de estudios Tokio School en cuatro cursos diferentes:

  1. Seguridad informática
  2. Programación
  3. Redes informáticas
  4. Blockchain

## DESARROLLO

Una vez puesto en situación decides enviar tu candidatura a las dos vacantes disponibles y, para que
tu curriculum destaque entre el resto decides demostrar tu valía resolviendo el planteamiento de
cada una de las vacantes.

### VACANTE 1:

Para el desarrollo de los requisitos de la primera vacante seguiremos los pasos siguientes:

  1. Hacer un estudio de la última versión de OperaEthereum estable, así como el docker
correspondiente para dicha versión que, será con la que se comenzará a trabajar.
  2. Tener claro las cuentas que hay que crear y como generar las cuentas con la firma necesaria
de cada una de ellas.
  3. Generar la parte donde se definen las cuatro cuentas, levantar los cuatro dockers y hacer
una transferencia con un SC de test, uno que pase a través de los nodos validadores y otro
que pase por los que no son validadores a ver si realmente se ha generado la transacción

### VACANTE 2:

Para el desarrollo de los requisitos de la segunda vacante seguiremos los pasos siguientes:

  1. Desplegar una Blockchain (preferiblemente de Ethereum).
  2. Desarrollar el Smart Contract (a partir de ahora SC) para poder introducir dos variables de
entrada (curso elegido y persona que se matricula), además debe tener la opción para poder
recoger todas las personas que se han matriculado y poder realizar la query por cada uno de
los cursos.
  3. Desplegar el SC en la Blockchain seleccionada.
  4. Hacer transacciones para comprobar que efectivamente funciona el SC desarrollado.

## ENTREGA

La entrega del proyecto la realizaremos por la plataforma de Tokio School donde tendremos que
adjuntar un archivo .zip que vendrá nombrado como “PF_Nombre_Apellidos.zip” y que contendrá
todos los ficheros (scripts, enlaces, Smart Contract, etc… ) junto con los siguientes documentos:

  - El primero será un documento técnico donde se explique de manera detallada todos los
pasos que se han seguido, junto con las justificaciones de cada desarrollo y, las dificultades
obtenidas a lo largo de todo el proyecto. 
  - El segundo archivo será una presentación en formato PDF donde se resumirán todos los
pasos seguidos como guía general del trabajo realizado.

Para la evaluación del proyecto el docente hará de reclutador y estudiará nuestro trabajo, y nos podrá
solicitar los cambios que él considere oportunos. También nos va a plantear tres preguntas sobre el
proyecto de aquellos puntos que considere necesario saber más.

¿Qué se tiene en cuenta para la evaluación?:

  - El desarrollo cada ejercicio propuesto.
  - Se revisará la limpieza del código, del documento técnico y de la presentación.
  - También se probará la funcionalidad de la aplicación desarrollada.

Una vez el docente ha planteado las preguntas sobre nuestro trabajo, tendremos que grabar un
vídeo donde daremos respuesta a esas preguntas, teniendo siempre en cuenta que estamos
defendiendo nuestra candidatura ante un reclutador, así que no debemos olvidarnos de grabar con
profesionalidad este vídeo. Podemos usar para ello los recursos que consideremos necesarios y no
deberá tener una longitud mayor de 15 minutos.
