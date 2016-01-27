'use strict';

var express = require('express');
var app = express();
var port = 5000;
var path = require('path');

var convertDate = require('./app/convertDate.js');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:date', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/json');
	res.send(JSON.stringify(convertDate(req.params.date), '', 4));
});

app.get('*', function(req, res) {
	res.status(200);
	res.set('Content-type', 'text/json');
});

app.listen(process.env.PORT || port, function() {
	console.log('Server is running on port ' + port);
});
