
// require("dotenv").config();
require('path');
const express = require("express");
const exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",

  exphbs({
    defaultLayout: "main",
    partialsDir: [
      //  path to your partials
      __dirname + '/views/partials',
    ]
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
console.log('hello');
module.exports = app;


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
