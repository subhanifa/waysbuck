'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_order.init({
    idUser: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    toppings: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_order',
  });
  return tb_order;
};