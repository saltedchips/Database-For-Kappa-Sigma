'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      classes.hasMany(models.is_takings, {
        foreignKey: 'class_name', 
      });
    }
  }
  classes.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    section: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teacher: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};