# Node JS con Express - API de Cryptomonedas

## Instalación
1. Instalar NodeJS
2. Ejecutar el comando `npm install` para instalar las dependencias del proyecto.

## Ejecución
1. Ejecutar el comando `npm start` para correr el servidor de la API. El servidor estará corriendo en el puerto 3000.
2. Las rutas disponibles son:
   * `GET http://localhost:3000/api/balance?limit=100&page=1&search=pikachu-alola-cap`: Este endpoint recibe tres parámetros opcionales:
     - `search`: El nombre o parte del nombre de una Cryptomoneda para buscar. Retorna un arreglo de objetos con los datos de la Cryptomoneda  encontrados.


## Probar el Servicio

### Mediante Postman
En la carpeta `collection` se encuentra la colección de Postman para realizar pruebas a la API.

### Mediante un Proyecto Fron-end

Comparto el proyecto realizado Por mi para probar le proyecto de forma mas visual , el proyecto de realizo usando REACT JS

[Proyecto GITHUB](https://github.com/christophermaster/balance-reactjs)

* Se debe ejecutar el Back-end primero y el servidor debera estar  corriendo en el puerto 3000. luego el Front-end en el puerto 3001. 
* En la seccion de imagenes mostrare evidencias del Front y Postman

## Se Agrega Imagenes como Evidencias 

### Mediante un Proyecto Fron-end
NOTA: A la hora de descargar el PDF tarde un poco , Solo se debe esperar 
![Ejemplo 7: ](./img/7.png)
<br><br>
![Ejemplo 8: ](./img/8.png)
<br><br>
![Ejemplo 9: ](./img/9.png)
<br><br>
![Ejemplo 9: ](./img/10.png)
### Mediante Postman
 * `GET http://localhost:3000/api/balance?limit=100&page=1&search=pikachu-alola-cap`

![Ejemplo 1: ](./img/1.png)
<br><br>
![Ejemplo 2: ](./img/2.png)
<br><br>
![Ejemplo 3: ](./img/3.png)
<br><br>
![Ejemplo 4: ](./img/4.png)

 * `POST http://localhost:3000/api/balance/pdf`

![Ejemplo 5: ](./img/5.png)
<br><br>
![Ejemplo 6: ](./img/6.png)