'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exec_position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  exec_position.init({
    exec_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exec_position',
  });
  return exec_position;
};