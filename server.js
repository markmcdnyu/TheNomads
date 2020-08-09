//Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

//set express-handlebars
const exphbs = require("express-handlebars");

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

/// handlebars
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

// Using routes, both API and html
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});


//============================
// Backup routers
// Use in case of emergency
// Delete when ready

//routing
// app.get('/', (req, res) => {
//   res.render('index', {title: 'Home Page'});
// });

// app.get('/all_categories', (req, res) => {
//   res.render('all_categories', {title: 'Categories'});
// });

// app.get('/all_products', (req, res) => {
//   res.render('all_products', {title: 'Products'});
// });

// app.get('/listing_form', (req, res) => {
//   res.render('listing_form');
// });