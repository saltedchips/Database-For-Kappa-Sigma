'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class committees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      committees.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
      committees.belongsTo(models.exec_positions, {
        foreignKey: {
          name: 'exec_name', 
          type: DataTypes.STRING,  
          allowNull: false, 
        },
        targetKey: 'exec_name'  
      });
      committees.hasMany(models.is_on_coms, {
        foreignKey: 'com_name', 
      });
    }
  }
  committees.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'committees',
  });
  return committees;
};