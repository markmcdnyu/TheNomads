module.exports = function (sequelize, DataTypes) {
    var items = sequelize.define("items", {
        sellerId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        details: DataTypes.STRING,
        price: DataTypes.DECIMAL
    });



    items.associate = function (models) {
        // We're saying that a items should belong to an seller
        // A items can't be created without an seller due to the foreign key constraint
        items.belongsTo(models.seller, {
            foreignKey: {
                allowNull: false
            }
        });
        items.belongsToMany(models.wishList, { through: models.wishListItem });


    };


    return items;
};