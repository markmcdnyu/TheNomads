// Dependencies
// =============================================================
const path = require("path");
const router = require('express').Router();
const db = require("../models");


//Routes will go below
// =============================================================

router.get("/product", renderProducts); //   /product
router.get('/', renderProducts);   // clean up the quotes 

// listing_form route loads listing_form html
router.get("/listing_form", function (req, res) {   //     /listing_form
    res.render('listing_form');   // listing_form
});

router.get("/categories", function (req, res) {     //      /categories
    res.render('categories');   // categories
});


// helper for / and blog routes
function renderProducts(req, res) {
    var query = {};
    if (req.query.category_id) {
        query.CategoryId = req.query.category_id;
    }
    db.Product.findAll({
        where: query,
        include: [db.Category]
    }).then(function (products) {
        res.render('product', { products: products })
    });
}

module.exports = router;