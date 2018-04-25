
/*
 * GET home page.
 */
var user = require('./user');

exports.index = function(req, res){
  res.render('index', { title: 'Express', tochan: user.tochan });
};