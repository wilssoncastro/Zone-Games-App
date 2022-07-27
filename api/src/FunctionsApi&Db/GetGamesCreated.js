const { Videogame, Genre, Platform } = require('../db');
const { Op } = require("sequelize");

async function getVideoGamesCreated(name){ 

    let WithOutNames = [];

    if(!name){ // ..... ..... 
       
        WithOutNames = Videogame.findAll({
            include: [{
              model :Genre,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            },{ // ----
              model :Platform,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            }],
          });
          return WithOutNames

    }else{
       //Incluya nombre
        withNames = Videogame.findAll({
            include: [{
              model :Genre,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            },{ // ----
              model :Platform,
              attributes: ['name'],
              through : {
                attributes : [],
              }
            }],
            where: {
              name: { [Op.iLike]: `%${name}%` },
            },
          });
        // ....................................................
          return withNames
        // ....................................................
    }
};
module.exports = getVideoGamesCreated;