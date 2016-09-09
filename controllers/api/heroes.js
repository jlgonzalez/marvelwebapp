var router = require('express').Router()
var Hero = require('../../model/hero')



router.get('/heroes', function (req, res, next) {
  var randomId = 1009629;
 //Check if id in MongoDB.
   Hero.findOne({id:randomId},function (err, hero) {
     console.log('findOne');
    if (err) { return next(err) }

    if (!hero){
             console.log('no hero');
        //Get hero from API
        var heroFromAPI  = {
        "id": 1009629,
        "name": "Storm",
        "description": "Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.",
        "modified": "2013-10-24T14:17:31-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009629"
      }

      var heroToSave = new Hero({
          id: heroFromAPI.id,
          name: heroFromAPI.name,
          description: heroFromAPI.description,
          thumbnail_path:heroFromAPI.thumbnail.path,
          thumbnail_extension:heroFromAPI.thumbnail.extension,
          resourceURI:heroFromAPI.resourceURI,
          modelVersion:0
          })

     heroToSave.save(function (err, hero) {
        if (err) { return next(err) }
         console.log('saved hero');
        res.status(201).json(hero)
      })
    }else{
        console.log('hero found');
        res.json(hero)
    }
  })
  })

module.exports = router
