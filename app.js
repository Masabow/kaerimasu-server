
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');


var app = express();

pos = {'null':null};

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
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/', function(req, res) {
	console.log("POST/:" );
	console.log(req.body);
	var id = req.body.req_status;
	if (id === 'kaerimasu') {
		user.tochan.kaerimasu();
	} else if (id === 'kaerimasita') {
		user.tochan.kaerimasita();
	}
});

app.post('/user_status', function(req, res) {
	user.tochan.data.status_code = req.body.status;
});

app.post('/user_pos', function(req, res) {
	user.tochan.setPos(req.body);
	console.log(user.tochan.data.pos);
});

app.get('/user', function(req, res) {
	console.log(user.tochan.data.pos);
	res.send(user.tochan.data);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
