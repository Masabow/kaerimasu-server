var db = require('../db/db'),
  seq = require('sequelize');
module.exports = db.define('timeline', {
  latitude:{type:seq.DOUBLE},
  longitude:{type:seq.DOUBLE},
  accuracy:{type:seq.DOUBLE},
  altitude:{type:seq.DOUBLE},
  timestamp:{type:seq.DOUBLE},
  speed:{type:seq.DOUBLE},
  heading:{type:seq.DOUBLE}
});