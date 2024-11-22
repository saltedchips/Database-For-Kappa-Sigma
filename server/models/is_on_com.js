'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_on_com extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  is_on_com.init({
    student_id: DataTypes.INTEGER,
    com_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'is_on_com',
  });
  return is_on_com;
};