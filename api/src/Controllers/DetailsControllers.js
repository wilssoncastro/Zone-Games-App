require('dotenv').config();
const  { API_KEY }  = process.env;
const axios = require('axios');
const { Router } = require('express');
const router = Router();
const {Videogame, Genre, Platform} = require('../db.js');



router.get('/:id', async (req,res,next) => {
    const { id } = req.params;
    try {

      if (id.length > 8) {

        const videogame = await Videogame.findByPk(id, {
            include: [{
                model: Genre,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }, {
                model: Platform,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }],
        })
        res.send(videogame)

    } else {
        const gameDetail = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        let e = gameDetail.data;
        const detailsObj = {
            name: e.name,
            image: e.background_image,
            description: e.description,
            released: e.released,
            rating: e.rating,
            genres: e.genres.map(e => e.name),
            platforms: e.platforms.map(e => e.platform.name)
        }
        return res.send(detailsObj);}
    } catch (error) {
        next(error);
    }
});
// [ ] POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos

router.post("/", async (req, res, next) => {
    const { name, description, released, image, rating, platforms, genre  } = req.body;
    try {
      const newGame = await Videogame.create({
        name: name.toUpperCase(),
        description,
        released,         
        rating,
        image,
        platforms,
       });

      let genreDb = await Genre.findAll({
        where: {
          name: genre
        }
      });
      
     let platformDb = await Platform.findAll({
        where: { name: platforms }
     });
      newGame.addGenre(genreDb);
      newGame.addPlatforms(platformDb); 

      

      res.send(newGame);

    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;