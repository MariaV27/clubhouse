var express = require('express');
var app = express();
var port = 3000;

//database setup
var Sequelize = require('sequelize');
var connection = new Sequelize('clubhouse_db', 'root');

//handlebars setup
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var clubhouse = connection.define('clubhouse', {
  name: Sequelize.STRING,
  satisfaction: Sequelize.INTEGER
});


// database connection via sequelize
connection.sync().then(function() {
  app.listen(port, function() {
      console.log("Listening on:" + port)
  });
});