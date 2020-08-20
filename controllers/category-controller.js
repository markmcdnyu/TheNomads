// Requiring our models

const db = require("../models");
const express = require('express');
const router = express.Router();

// Find all categories and return them to the user 

router.get("/api/categories", function (req, res) {
    db.Category.findAll({
        include: [db.Product]
    }).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

router.get("/api/categories/:id", function (req, res) {
    db.Category.findOne({
        where: {
            id: req.params.id
        },
        include: [db.product]
    }).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

router.post("/api/categories", function (req, res) {
    console.log(req.body)
    db.Category.create(req.body).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

router.delete("/api/categories/:id", function (req, res) {
    db.Category.destroy({
        where: {
            id:req.params.id
    }
    }).then(function (dbCategory) {
        res.json(dbCategory);
    });
});

module.exports = router;

//end