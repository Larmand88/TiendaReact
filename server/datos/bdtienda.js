
var mongoose = require('mongoose');
var BDTienda = mongoose.connect('mongodb://localhost/bdtienda', {
  useMongoClient: true,
  /* other options */
});
module.exports = BDTienda;
