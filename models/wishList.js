module.exports = function (sequelize, DataTypes) {
    let wishList = sequelize.define("wishList", {
        buyerName: DataTypes.STRING,
    });


    wishList.associate = function (models) {

        wishList.belongsToMany(models.items, {
            through: models.wishListItem
        });
    };

    return wishList;

};