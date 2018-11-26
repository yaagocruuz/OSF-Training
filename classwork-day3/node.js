var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

app.get('/0', function (req, res) {
    request('https://reqres.in/api/users?page=2', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/1', function (req, res) {
    request('https://reqres.in/api/users/2', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/2', function (req, res) {
    request('https://reqres.in/api/users/23', function(response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/3', function (req, res) {
    request('https://reqres.in/api/unknown', function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/4', function(req, res) {
    request('https://reqres.in/api/unknown/2', function(error, response, body){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/5', function(req, res) {
    request('https://reqres.in/users', function(error, response, body){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/6', function(req, res) {
    request('https://reqres.in/api/users/2', function(error, response, body){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/7', function(req, res) {
    request('https://reqres.in/api/register', function(error, response, body){
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        res.send(('body:', body));
    });
});

app.get('/form', function(req, res) {
    res.render('home');
})

app.post('/form', function(req, res){
    var postData={
        "name": "Anderson",
        "job" : "Trainer"
    };
    request.post({
        uri:"https://reqres.in/api/users",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)  
    }, function(err, response, body){
        console.log(body);
        console.log(response.statusCode);
        res.send(body)
    })
});

app.get('/form2', function(req, res) {
    res.render('home');
})

app.post('/form2', function(req, res){
    var postData={
        "name": req.body.name,
        "job" : req.body.job
    };
    request.post({
        uri:"https://reqres.in/api/users",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)  
    }, function(err, response, body){
        console.log(body);
        console.log(response.statusCode);
        res.send(body)
    })
});

app.get('/register', function(req, res) {
    res.render('register');
})

app.post('/register', function(req, res){
    var postData={
        "email": req.body.email,
        "password" : req.body.password
    };
    request.post({
        uri:"https://reqres.in/api/register",
        headers:{'content-type': 'application/x-www-form-urlencoded'},
        body:require('querystring').stringify(postData)  
    }, function(err, response, body){
        console.log(body);
        console.log(response.statusCode);
        res.send(body)
    })
});

app.listen(3051, function() {
    console.log('Example app listening on port 3051');
});

