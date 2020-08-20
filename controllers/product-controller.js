// Requiring our models
const db = require("../models");
const express = require('express');
const router = express.Router();


// Routes
// =================================================

// Get route for getting all of the products
router.get("/api/products", function (req, res) {
    var query = {};
    if (req.query.category_id) {
        query.CategoryId = req.query.category_id;
    }
    // Use include property, so [db.Category]
    db.Product.findAll({
        where: query,
        include: [db.Category]
    }).then(function (dbProduct) {
        res.json(dbProduct);
    });
});

// Get route for retrieving a single product
router.get("/api/products/:id", function (req, res) {

    // Use include property, so [db.Category]
    db.Product.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Category]
    }).then(function (dbProduct) {
        res.json(dbProduct);
    });
});

// POST route for saving a new product
router.post("/api/products", function (req, res) {
    db.Product.create(req.body).then(function (dbProduct) {
        res.json(dbProduct);
    });
});


// DELETE route for deleting products
router.delete("/api/products/:id", function (req, res) {
    db.Product.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbProduct) {
        res.json(dbProduct);
    });
});

// PUT route for updating posts
router.put("/api/products", function (req, res) {
    db.Product.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
});

module.exports = router;
