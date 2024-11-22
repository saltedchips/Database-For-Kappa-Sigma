'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  member.init({
    student_id: DataTypes.INTEGER,
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    service_hrs: DataTypes.INTEGER,
    GPA: DataTypes.DECIMAL,
    phone_num: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    ec_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'member',
  });
  return member;
};