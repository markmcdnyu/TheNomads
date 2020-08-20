//require path
var path = require("path");


//routes here
module.exports = function (app) {
    //app.get for the "/" route

    // app.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/all_products.html"));
    // })

    // //app.get for the "listing form" route
    // app.get("/listing_form", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/listing_form.html"));
    // });

    // //app.get for the "products" route
    // app.get("/all_products", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/all_products.html"));
    // });
    // //app.get for the "categories" route
    // app.get("/all_categories", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/all_categories.html"));
    // });

    //=================
    //route switch to views folder
    app.get('/', (req, res) => {
      res.sendFile('index', {title: 'Home Page'});
    });
    
    app.get('/all_categories', (req, res) => {
      res.render('all_categories', {title: 'Categories'});
    });
    
    app.get('/all_products', (req, res) => {
      res.render('all_products', {title: 'Products'});
    });
    
    app.get('/listing_form', (req, res) => {
      res.render('listing_form');
    });

};

//end