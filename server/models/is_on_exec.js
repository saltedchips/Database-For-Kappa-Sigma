'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_on_exec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  is_on_exec.init({
    student_id: DataTypes.INTEGER,
    is_assistant: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'is_on_exec',
  });
  return is_on_exec;
};