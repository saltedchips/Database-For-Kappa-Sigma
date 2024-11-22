'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_taking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  is_taking.init({
    student_id: DataTypes.INTEGER,
    class_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'is_taking',
  });
  return is_taking;
};