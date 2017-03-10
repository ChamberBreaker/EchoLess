const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// const newsAPI = require('./controllers/newsAPI.controller');

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
// newsAPI.loadController(app);
app.use(express.static(__dirname + '/../public/'));

module.exports = app;
