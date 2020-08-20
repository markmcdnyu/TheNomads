
require("dotenv").config();
// *** Dependencies
// =============================================================
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// const routes = require('./routes/html-routes');
// multer middleware
const multer = require('multer');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static("public"));

// template engine
app.engine(
  'handlebars',
  
  exphbs({
  defaultLayout: 'main',
  partialsDir: [
    // path to partials
    __dirname + '/views/partials',
  ]
}));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/category-api-routes.js")(app);
require("./routes/post-api-routes.js")(app);
// app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
