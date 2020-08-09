let db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("/api/seller/:seller", function (req, res) {
        db.seller.findAll({ where: { id: req.params.seller } }).then(function (dbSeller) {
            res.json(dbSeller);
        });
    });
    app.get("/api/:seller/items", function (req, res) {
        db.items.findAll({ where: { sellerId: req.params.seller } }).then(function (dbItems) {
            res.json(dbItems);
        });
    });
    app.get("/api/:seller/address", function (req, res) {
        db.address.findAll({ where: { sellerId: req.params.seller } }).then(function (dbAddress) {
            res.json(dbAddress);
        });
    });

    app.get("/api/:buyer/booty", function (req, res) {
        db.wishList.findAll({
            where: { id: req.params.buyer },
            include: [{
                model: db.items,
                as: 'items',
                required: false
            }]
        }).then(function (dbBuyer) {
            res.json(dbBuyer);
        });
    });
    app.get("/api/buyermax", function (req, res) {
        db.wishList.max('buyerId').then(function (buyerId) {
            // let newBuyer = buyerId + 1;
            res.json(buyerId);
        });
    });

    //POST ROUTES
    app.post("/api/seller", function (req, res) {
        db.seller.create(req.body).then(function (dbSeller) {
            res.json(dbSeller);
        });
    });
    app.post("/api/seller/items", function (req, res) {
        let newItem = req.body;
        db.items.create(newItem).then(function (dbItems) {
            res.json(dbItems);
        });
    });
    app.post("/api/:seller/address", function (req, res) {
        let newAddress = req.body;
        newAddress.sellerId = req.params.seller;
        db.address.create(newAddress).then(function (dbAddress) {
            res.json(dbAddress);
        });
    });
    app.post("/api/:buyer/booty", function (req, res) {
        let newItem = req.body;
        newItem.buyerId = req.params.buyer;
        db.wishList.create(newItem).then(function (dbBuyer) {
            res.json(dbBuyer);
        });
    });

    // Delete an example by id
    app.delete("/api/seller/:items", function (req, res) {
        db.items.destroy({ where: { id: req.params.items } }).then(function (dbItems) {
            res.json(dbItems);
        });
    });
    app.delete("/api/seller/:address", function (req, res) {
        db.address.destroy({ where: { id: req.params.address } }).then(function (dbAddress) {
            res.json(dbAddress);
        });
    });
    app.delete("/api/buyer/:booty", function (req, res) {
        db.items.destroy({ where: { id: req.params.buyer } }).then(function (dbBuyer) {
            res.json(dbBuyer);
        });
    });

};