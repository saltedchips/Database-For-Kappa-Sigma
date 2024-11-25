'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class emergency_contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      emergency_contacts.hasMany(models.members, {
        foreignKey: 'emergency_contact_name', 
      });
    }
  }
  emergency_contacts.init({
    ec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    phone_num: {
      type: DataTypes.STRING,
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'emergency_contacts',
  });
  return emergency_contacts;
};