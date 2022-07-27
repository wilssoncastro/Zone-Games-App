require('dotenv').config();
const { Router } = require('express');
const router = Router();
const getApiGames = require('../FunctionsApi&Db/GetApiGames')
const getVideoGamesCreated = require('../FunctionsApi&Db/GetGamesCreated')
const { v4: uuidv4 } = require('uuid');



router.get('/', async (req,res,next) => {
    let videogamesInApi;
    let videogamesInDb;
    const { name } = req.query

 try {
            videogamesInApi = await getApiGames();
            videogamesInDb = await getVideoGamesCreated()
            //todo viene en arrays
        

        Promise.all([videogamesInApi, videogamesInDb]).then((response) => {
            const [videogamesInApi, videogamesInDb] = response;
      
            let VideogamesfromApi = videogamesInApi.map((e) => {
              return {
                id: e.id, 
                name: e.name.toUpperCase(),
                released: e.released,
                image: e.background_image,
                rating: e.rating,
                description: e.slug,
                genres: e.genres.map((g) => g.name),
                platforms: e.platforms.map((p) => p.platform.name)
                            
              };
              
            });
          
           
      
            let allVideogames = [...videogamesInDb, ...VideogamesfromApi];
           
           if(name){
             let onlyfifteen = allVideogames.filter(e => e.name.includes(name.toUpperCase())).slice(0,16)
             res.send(onlyfifteen);
           }else if(!allVideogames.length){
      
              return res.send('No response').status(404);
            }else
            
            res.send(allVideogames);
          });
        } catch (error) {
          next(error);
        }
      });

      //Si necesitamos buscar por name a toda la Api con limit 15
    
    // try {
    //     if(name){
    //         videogamesInApi = await getApiGames(name);
    //         videogamesInDb = await getVideoGamesCreated(name)
    //         //todo viene en arrays
    //     }else{
    //         videogamesInApi = await getApiGames();
    //         videogamesInDb = await getVideoGamesCreated()
    //         //todo viene en arrays
    //     }

    //     Promise.all([videogamesInApi, videogamesInDb]).then((response) => {
    //         const [videogamesInApi, videogamesInDb] = response;
      
    //         let VideogamesfromApi = videogamesInApi.map((e) => {
    //           return {
    //             id: e.id, 
    //             name: e.name,
    //             released: e.released,
    //             image: e.background_image,
    //             rating: e.rating,
    //             description: e.slug,
    //             genres: e.genres.map((g) => g.name),
    //             platforms: e.platforms.map((p) => p.platform.name)
                            
    //           };
              
    //         });
          
           
      
    //         let allVideogames = [...videogamesInDb, ...VideogamesfromApi];
    //         if(!allVideogames.length){
      
    //           return res.send('No response').status(404);
    //         }
            
    //         res.send(allVideogames);
    //       });
    //     } catch (error) {
    //       next(error);
    //     }
    //   });
        

























































        
        
//         let videogames = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results.map(e => ({
//              name: e.name,
//              id: e.id,
//              rating: e.rating, 
//              image: e.background_image,
//              genres: e.genres.map((x) => x.name),
//              platforms: e.platforms.map((z) => z.platform.name)

//             })); 
//             if(name){
//                 let videoGames = (await axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`)).data.results.map(e => ({
//                     id: e.id,
//                     name: e.name,
//                     rating: e.rating, 
//                     image: e.background_image,
//                     genres: e.genres.map((x) => x.name),
//                     platforms: e.platforms.map((z) => z.platform.name)
//                    }));
//                 let videogame = await videoGames.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
//                 if(videogame.length){
//                     res.send(videogame);
//                 } else {
//                 res.send('No hay resultados con tu búsqueda');
//                 }  
//             } else {
//                 return res.send(videogames);  
//             }
//     } catch (error) {
//         next(error);
//     }
// });


module.exports = router;