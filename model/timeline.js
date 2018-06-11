var db = require('../db/db'),
  seq = require('Sequelize');
module.exports = db.define('timeline', {
  latitude:{type:seq.Number},
  longitude:{type:seq.Number},
  accuracy:{type:seq.Number},
  altitude:{type:seq.Number},
  timestamp:{type:seq.Number},
  speed:{type:seq.Number},
  heading:{type:seq.Number}
});