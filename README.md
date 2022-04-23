# Tap-challenge

Hola! Ante todo gracias por la oportunidad!

El server está hecho con JavaScript, NodeJS, ExpressJS, PostgreSQL y Sequelize.

En primer lugar ejecutar el siguiente comando para instalar dependencias:

`npm install `

Antes de iniciar el server, se debe crear una base de datos en PostgreSQL. Insertando los siguientes comandos:

`CREATE DATABASE luciaenlgenderchallenge ;`

Luego, crear un archivo .env para asignar las variables de entorno:

```PORT= 
HOST= 
PASSWORD= 
USER= 
DB = 
```


Ya finalizado el proceso anterior, inicializar el server con el siguiente comando :

`npm start`

En caso de querer crear una partida, en Postman ingresar en :

``` GET - http://${HOST}:${PORT}/game```

Recibirás una respuesta como esta:

```{
  "game": {
    "id": "56bffff1-76cc-4ffd-8bdf-9bc17d431e13",
    "state": {
      "code": 1,
      "description": "CREATED"
    },
    "updatedAt": "2022-04-23T13:35:57.187Z",
    "createdAt": "2022-04-23T13:35:57.187Z"
  },
  "cells": {
    "id": 2,
    "type": [
      
    ],
    "updatedAt": "2022-04-23T13:35:57.215Z",
    "createdAt": "2022-04-23T13:35:57.215Z",
    "gameId": null
  }
}
```

(Recomendación, guardar el id de la partida)

Para recuperar una partida específica, ingesar en :

```GET - http://${HOST}:${PORT}/game/:id```

Siendo el "id" el correspondiente a dicha partida. Por ejemplo: 

```GET - http://${HOST}:${PORT}/game/56bffff1-76cc-4ffd-8bdf-9bc17d431e13```

Para actualizar el resultado de una partida específica, ingresar en :

```POST - http://${HOST}:${PORT}/game```

Y en la sección body utilizar este formato:

```
{
  "game": {
    "id": "",
    "state": {
      "code": ,
      "description": ""
    }
  },
  "cells": {
    "type": [
      
    ]
  }
}
```

Siendo id el correspondiente a la partida. En caso de que el resultado sea "WON", en code ingresar 2 y en description WON. De lo contrario, utilizar code 3 y description LOST. En cells, agregar la cantidad de celdas alcanzadas. Por ejemplo : 

```
{
  "game": {
    "id": "56bffff1-76cc-4ffd-8bdf-9bc17d431e13",
    "state": {
      "code": 2,
      "description": "WON"
    }
  },
  "cells": {
    "type": [
      56
    ]
  }
}
```

Para ejecutar los test, utilice el siguiente comando:

`npm test`

Disfrute mucho hacer este challenge!
Saludos, Lucia Englender
