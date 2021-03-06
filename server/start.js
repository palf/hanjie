var express = require('express'),
    path = require('path');

var routes = require('./routes');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/hanjie', routes.hanjie);
app.get('/', routes.hanjie);

app.use('/', express.static(path.join(__dirname, 'public')));


var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    'use strict';

    var host = server.address().address;

    console.log('app listening at http://%s:%s', host, port);
});
