//exporting sequelize //

module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  return Product;
};
