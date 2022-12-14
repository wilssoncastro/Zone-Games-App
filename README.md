

# Individual Project - Henry Videogames

<p align="right">
  <img height="200" src="./videogame.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Enunciado

La idea general fue crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar juegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos juegos

## ¿Quieres probar mi proyecto?

 1. Clonar el repositorio en sus computadoras, puedes hacerlo utilizando el comando `git clone https://github.com/wilssoncastro/pi-wilson-videogames.git` en <strong>'git bash'</strong>
 2. En la carpeta `api` crear un archivo llamado: `.env` que tenga la siguiente forma:
    ```
    DB_USER=usuariodepostgres
    DB_PASSWORD=passwordDePostgres
    DB_HOST=localhost
    PORT=3001
    API_KEY=93e0ca3b-2f7e-42fb-97ac-2cc45a83e01c
    ```
    Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres.
    Adicionalmente será necesario que crees desde <strong>PostgresSQL</strong> una base de datos llamada `dogs`.
 3. Una vez completado este paso, desde la consola, y parado en la carpeta <strong>'api'</strong>, correr los comandos ```npm install``` para instalar las dependencias. Luego, ```npm start``` para levantar la base de datos y correr el Back-end.
 4. Repetir los comandos en otra consola, pero parado en la carpeta <strong>'client'</strong>.
 5. El proyecto debería estarse corriendo en la ruta <em>localhost:3000</em> en tu navegador.

## Tecnologías utilizadas:
- [ ] JavaScript
- [ ] React
- [ ] Redux
- [ ] Node
- [ ] Express
- [ ] Sequelize
- [ ] PostgresSQL
- [ ] HTML
- [ ] CSS

## Imagenes del proyecto

Landing Page
<img src ="https://media.discordapp.net/attachments/969781799876177925/999029271878193274/Landing_page.JPG?width=890&height=473"/>

Home
<img src ="https://media.discordapp.net/attachments/969781799876177925/999029288949006489/Home.JPG?width=1016&height=473"/>

Videogame Detail
<img src ="https://media.discordapp.net/attachments/969781799876177925/999029307651407983/Detail.JPG?width=918&height=473"/>
#   A p p - V i d e o g a m e s  
 