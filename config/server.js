const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const consign = require('consign');
const database = require('./database')();
const app = express();

app.set("view engine", "EJS");
app.set("views", "./app/views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(express.static('./app/public'));

consign().include('/app/routes')
    .then('/config/database.js')
    .then('/app/controllers')
    .then('/app/models')
    .into(app);



module.exports = app;