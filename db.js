var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/marveltestapp', function () {
  console.log('mongodb connected')
})
module.exports = mongoose