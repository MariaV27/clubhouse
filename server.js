var express = require('express');
var app = express();
var port = 30000;

var Sequelize = require('sequelize');
var connection = new Sequelize('chocolate', 'root');

//handlebars setup
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var clubhouse = connection.define('clubhousee', {
  name: Sequelize.STRING,
  satisfaction: Sequelize.INTEGER
});