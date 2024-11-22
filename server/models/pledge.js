'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pledge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pledge.init({
    student_id: DataTypes.INTEGER,
    pledging_semester: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pledge',
  });
  return pledge;
};