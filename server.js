
//below is a basic server to run handlebars through localhost
const express = require("express");
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
// const routes = require('./routes/handlebars');

//runs css styles
app.use(express.static('public'));

// const hbs = expbs.create({...
// });

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//routing
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/poster', (req, res) => {
  res.render('poster');
});

app.get('/seeker', (req, res) => {
  res.render('seeker');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(8080, () => {
  console.log('Server is starting at port ', 8080);
});
//end of basic server built by John Bentley

// ===========================================================

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Static directory
// app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

