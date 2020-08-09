module.exports = function (sequelize, DataTypes) {

    let seller = sequelize.define("seller", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        dates: DataTypes.STRING,
        message: DataTypes.STRING
    });

    seller.associate = function (models) {
        // Associating seler with items
        // When an seler is deleted, also delete any associated items
        seller.hasMany(models.items, {
            onDelete: "cascade"
        });
    };


    return seller;
};