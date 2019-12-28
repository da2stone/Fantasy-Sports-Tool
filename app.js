/*************************************************
Main class for the logic of the Fantasy Hockey App
**************************************************/

var express = require("express");
var bodyParser = require("body-parser");

var db = require("./db");

var app = express();
var urlencodedparser = bodyParser.urlencoded({extended: false});

app.use(bodyParser.json());
app.set('view engine', 'ejs'); // set the view engine to use ejs 

// Able to access other css files
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.render('index');
})
.listen(3000);

console.log("Listening on port 3000 (http://localhost:3000)");