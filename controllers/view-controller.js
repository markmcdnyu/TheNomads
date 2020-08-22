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


// helper for / and products routes
function renderProducts(req, res) {
    var query = {};
    if (req.query.category_id) {
        query.CategoryId = req.query.category_id;
    }
    db.Product.findAll({
        where: query,
        include: [db.Category]
    }).then(function (products) {
        // console.log(products[0].Category.name);
        // hdbrs is trying to protect data.
        // 1) create a temporary object from data in database
        // 2) pass in temp object to the render 
        // note-- loop through data from database
        // note-- pull out important info -- grab object data values
        // let temp = []
        // products.forEach(prod => {
        //     temp.push(prod);
        // });
        // res.render('product', { products: temp })
        const context = {
            usersProducts: products.map((prod) => {
                return {
                    id: prod.id,
                    title: prod.title,
                    body: prod.body,
                    Category: prod.Category.name
                };
            }),
        };
        console.log(context);
        // rendering usersProducts from context Object
        res.render("product", {
            products: context.usersProducts,
        });
    });
}

module.exports = router;