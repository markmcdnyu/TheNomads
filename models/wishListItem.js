module.exports = function (sequelize, DataTypes) {
    let wishListItem = sequelize.define("wishListItem", {
        itemId: DataTypes.STRING,
        wishListId: DataTypes.STRING
    });


    return wishListItem;

};