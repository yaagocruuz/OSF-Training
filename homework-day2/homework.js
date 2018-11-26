var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var meuJs = require('./funcoes');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res){
    res.render('home',{
       item: "lorem ipsum"
    })
});

app.get('/pt1/:id', function(req, res){
    var num = req.params.id;
    res.send(meuJs.odd_or_even(parseInt(num)));
});

app.get('/pt2', function(req, res){
   let q2 = meuJs.random_number(10, 1);
   let msg = "Random number: " + q2;
    res.render('home', {
        item: msg
    })
});

app.get('/pt3/:id', function(req, res){
    var num = req.params.id;

    if (num < 5){
        res.render('home', {
            item: num
        })
    }else{
        res.send(num);
    }
 });

app.get('/pt4', function(req, res){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    res.send(numbers);
});

app.listen(3050, function() {
    console.log('Example app listening on port 3050');
});