'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exec_positions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      exec_positions.hasOne(models.is_on_execs, {
        foreignKey: 'exec_name', 
      });
    }
  }
  exec_positions.init({
    exec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'exec_positions',
  });
  return exec_positions;
};