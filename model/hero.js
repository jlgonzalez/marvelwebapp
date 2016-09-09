var db = require('../db')
var Hero = db.model('Hero', {
  id: { type: Number, required: true },
  name:     { type: String, required: true },
  description:     { type: String, required: true },
  modified:     { type: Date,   required: true, default: Date.now },
  thumbnail_path:{ type: String, required: true },
  thumbnail_extension:{ type: String, required: true },
  resourceURI:{ type: String, required: true },
  modelVersion:{type:Number,required:true,default:0}
})

module.exports = Hero