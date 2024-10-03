'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
    }
  }
  Member.init({
    GPA: DataTypes.FLOAT,
    Student_ID: DataTypes.INTEGER,
    Service_Hours: DataTypes.INTEGER,
    Phone_Number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'member',
  });
  return Member;
};