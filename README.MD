# Template Básico de nodejs(express)

"La API es una aplicación de servidor simple que utiliza el framework Express.js en Node.js. En su estado actual, la API proporciona una sola funcionalidad básica: cuando se accede a la ruta raíz ('/'), devuelve un mensaje de saludo ('Welcome to my API'). Esta API puede servir como un punto de partida para desarrollar aplicaciones más complejas o como una introducción al desarrollo de APIs utilizando Node.js y Express."

## Cómo utilizar este template

Sigue estos pasos para utilizar este template en tu proyecto:

1. **Clonar el repositorio**: Clona este repositorio en tu máquina local utilizando Git.


   pero antes revisa si tienes node.js instalado en tu pc con este comando

   node --version y con el sabras si esta isntalado y su version, luego si seguir con los pasos

    git clone https://github.com/lafuentescorzo/RESTAPI-NODE.git

2. **Instalar dependencias**: Navega al directorio del proyecto y utiliza npm para instalar las dependencias.
    npm install express
    npm install morgan

3. **Ejecutar la aplicación**: Utilizael siguiente comando por consola para ejecutar la aplicación en un entorno de desarrollo local.
   node src/index.js  
   la tendras disponible en tu http://localhost:3000   

## Ya con esto tendrias el templete en tu pc listo para poder modificarlo y hacer lo que quieras dentro de el.

## Dentro de este template te encontraras un archivo llamado Dockerfile el cual esta listo para cuando necesites contenerizar tu app, para hacerlo sigue estos pasos.

1. **Construir la imagen Docker**: Asegúrate de tener Docker instalado en tu sistema. Desde el directorio raíz de tu proyecto, ejecuta el siguiente comando     para construir la imagen Docker.
     docker build -t node-restapi .   
    Esto creará una imagen Docker con el nombre node-restapi, el punto al final significa que Docker buscará el Dockerfile en el directorio actual y utilizará todos los archivos y directorios en este directorio como parte del contexto de construcción, debes reemplazar los mnombres por el nombre que quieras ponerle a la imagen.

2. **Ejecutar el contenedor Docker**: Una vez que la imagen se haya construido correctamente, puedes ejecutar un contenedor basado en esa imagen.
    docker run -d -p 4000:3000  node-restapi
    Esto ejecutará tu aplicación de node dentro de un contenedor Docker, y estará disponible en http://localhost:4000 en tu navegador.

  `4000`: Este es el puerto en el host (la máquina anfitriona) al que los usuarios externos enviarán solicitudes para acceder a la aplicación que se está ejecutando dentro del contenedor.

  `3000`: Este es el puerto en el contenedor donde la aplicación está escuchando las solicitudes entrantes.

 Entonces, cuando un usuario accede a través del puerto 4000 en el host, Docker redirige automáticamente esa solicitud al puerto 3000 dentro del contenedor, donde la aplicación en el contenedor está escuchando. Esto permite que los usuarios externos accedan a la aplicación en el contenedor a través del puerto 4000 en el host.

3. **para ver la imagen creada puedes usar el siguiente comando** docker images **y luego ejecutar el contenedor basado en la imagen puedes ejecutar el siguiente comando para verlo:** docker ps.}

4. **Explicacion de el contenido de el dockerfile**: 
Claro, cada parte del archivo Dockerfile tiene un propósito específico. Aquí está la explicación de cada una:

FROM node:12: Esta línea indica la imagen base que se utilizará para construir tu contenedor Docker. En este caso, estás utilizando la imagen oficial de Node.js versión 12 como base. Esto significa que tu contenedor se creará a partir de esta imagen base, que ya incluye Node.js instalado.

WORKDIR /app: Esta línea establece el directorio de trabajo dentro del contenedor donde se copiarán los archivos de la aplicación. Todas las instrucciones siguientes en el Dockerfile se ejecutarán desde este directorio de trabajo. En este caso, el directorio de trabajo se establece en /app.

COPY package*.json ./: Esta línea copia los archivos package.json y package-lock.json (si existen) del directorio de construcción (fuera del contenedor) al directorio de trabajo dentro del contenedor (/app). Esto es necesario para instalar las dependencias de la aplicación utilizando npm.

RUN npm install: Esta línea ejecuta el comando npm install dentro del contenedor. Instala todas las dependencias del proyecto Node.js basándose en los archivos package.json y package-lock.json que se copiaron previamente al directorio de trabajo. Esto asegura que todas las dependencias estén instaladas correctamente dentro del contenedor.

COPY . .: Esta línea copia todos los archivos y directorios del directorio de construcción al directorio de trabajo dentro del contenedor (/app). Esto incluye todos los archivos de código fuente de tu aplicación.

CMD [ "npm", "start" ]: Esta línea define el comando predeterminado que se ejecutará cuando se inicie el contenedor. En este caso, se ejecutará el script start definido en el archivo package.json de tu aplicación Node.js. 