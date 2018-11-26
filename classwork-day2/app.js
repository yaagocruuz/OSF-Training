var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meuJs = require('./functions');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
    res.render('home',{
       item: meuJs.q2
    })
});

app.get('/oi', function(req, res){
    res.send('Homework OSF Day 2');
});

app.get('/pt2', function(req, res){
   let q2 = meuJs.q2();
    res.send(q2);
});

app.get('/pt3/:id', function(req, res){
    var num = req.params.id;
    var square = meuJs.q3(parseInt(num));
    res.send("O quadrado do número " + num + " é: " + square);
 });

app.listen(8081, function() {
    console.log('Example app listening on port 8081');
});