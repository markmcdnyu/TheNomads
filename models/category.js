//Exporting the sequelize model for categories  

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        // Giving the Category model a name of type STRING
        name: DataTypes.STRING
    });

    Category.associate = function (models) {
        // Associating Categories with Products
        // When an Category is deleted, also delete any associated Products
        Category.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };

    return Category;
};
