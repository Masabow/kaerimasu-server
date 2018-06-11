
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , debug = require('debug')('app')
  , timeLine = require('./model/timeline')
  , db = require('./db/db');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

app.get('/', routes.index);
app.get('/users', user.list);
app.post('/', function (req, res) {
  debug('POST/:a');
  debug(req.body);
});

app.post('/user_status', function (req, res) {
  var id = req.body.req_status;
  if (id === 'kaerimasu') {
    user.tochan.kaerimasu();
  } else if (id === 'kaerimasita') {
    user.tochan.kaerimasita();
  }
});

app.post('/user_pos', function (req, res) {
  debug(req.body);
  var j = req.body;
  var test = {
    heading: j.heading,
    latitude: j.latitude,
    accuracy: j.accuracy,
    speed: j.speed,
    longitude: j.longitude,
    timestamp: j.timestamp    
  };
  db.sync().then(()=>timeLine.create(
    test)).then(jane => {
      console.log(jane);
      res.send('ok');});
//  user.tochan.setPos(req.body);
});

app.get('/user', function (req, res) {
  debug(user.tochan.data.pos);
  res.send(user.tochan.data);
});

http.createServer(app).listen(app.get('port'), function () {
  debug('Express server listening on port ' + app.get('port'));
});
