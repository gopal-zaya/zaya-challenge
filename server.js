var express = require('express');
var app = express();
var api = require('./api.js').API;
var cors = require('cors');

// use cors
app.use(cors())
var corsOptions = {
  origin: '*'
}
app.options('*', cors()) 
app.get('/', home);
app.get('/get/challenges', api.getChallenges);
app.post('/sync/challenge', api.syncChallenge)
app.get('/get/dates', api.getDates)
app.post('/update/meta', api.setMeta)
app.patch('/update/lessons', api.updateLessons)
app.post('/points',cors(), api.sendReport)

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/templates'));
app.use(express.static(__dirname + '/script'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/font'));
app.use(express.static(__dirname + '/css'));

var server = app.listen(8062, '0.0.0.0', function() {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})

function home(req, res) {
    res.sendFile(__dirname + "/index.html");
}
