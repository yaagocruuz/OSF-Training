var express = require('express');
var bodyParser = require('body-parser');

var listRoute = require('./routes/routes');
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

app.use('/', listRoute);

app.listen(1239, function() {
    console.log('Example app listening on port 1239');
});
