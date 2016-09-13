var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/marveltestapp_3', function () {
  console.log('mongodb connected')
})
module.exports = mongoose