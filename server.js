// load the things we need
var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});
// page curso 
app.get('/curso', function(req, res) {
    res.render('pages/index');
});
// page checklist 
app.get('/curso/checklist', function(req, res) {
    res.render('pages/curso/checklist');
});
// page static 
app.use(express.static(__dirname + '/'));
// server instance
app.listen(4400);