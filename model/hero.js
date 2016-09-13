var db = require('../db')
var Hero = db.model('Hero', {
  id: { type: Number, required: true },
  name:     { type: String, required: true },
  description:     { type: String},
  modified:     { type: Date,   required: true, default: Date.now },
  thumbnail_path:{ type: String  },
  thumbnail_extension:{ type: String },
  resourceURI:{ type: String },
  modelVersion:{type:Number,required:true,default:0},
  valid:{type: Boolean, default:true}

})

module.exports = Hero