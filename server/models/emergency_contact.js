'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emergency_contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  emergency_contact.init({
    name: DataTypes.STRING,
    relationship: DataTypes.STRING,
    phone_num: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'emergency_contact',
  });
  return emergency_contact;
};