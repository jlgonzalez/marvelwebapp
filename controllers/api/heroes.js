var router = require('express').Router()
var Hero = require('../../model/hero')
var Marvel = require('marvel')
var marvel = new Marvel({ publicKey: "8e7d37ab249b9c2e8646b005aa6e72e6", privateKey: "89b9623a918a7973421a837965e94e1a57f3832b"})



router.get('/randomhero', function (req, res, next) {
  var randomId = Math.floor(Math.random() * (999 - 000 + 1)) + 1009000;
  var modelversion=3;
   console.log(randomId)
 //Check if id in MongoDB.
marvel.characters
  .id(randomId)
  .get(function(err, resp) {
    if (err) { 
      console.log("Error: ", err) 
       var heroToSave = new Hero({
            id: randomId,
            name: 'No Hero Today',
            modelVersion:modelversion,
            valid:false
            })
       console.log(heroToSave)
       heroToSave.save(function (err, hero) {
          if (err) { return next(err) }
           console.log('saved non existing hero');
          res.status(201).json(hero)
        })
    }else { 
      console.log(resp) 

      Hero.findOne({id:randomId},function (err, hero) {
      if (err) { return next(err) }

      if (!hero){
          //Get hero from API
          var heroFromAPI  = resp[0]
           console.log(resp);

        var heroToSave = new Hero({
            id: heroFromAPI.id,
            name: heroFromAPI.name,
            description: heroFromAPI.description,
            thumbnail_path:heroFromAPI.thumbnail.path,
            thumbnail_extension:heroFromAPI.thumbnail.extension,
            resourceURI:heroFromAPI.resourceURI,
            modelVersion:modelversion,
            valid:true
            })
       console.log(heroToSave)
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

    }
  })

 
  })

router.get('/heroes', function (req, res, next) {
   Hero.find({'valid':true})
  .exec(function (err, heroes) {
    if (err) { return next(err) }
    res.json(heroes)

  })

 
  })


module.exports = router
