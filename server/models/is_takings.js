'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_takings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      is_takings.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
      is_takings.belongsTo(models.classes, {
        foreignKey: {
          name: 'class_name', 
          type: DataTypes.STRING,  
          allowNull: false, 
        },
        targetKey: 'name'  
      });
    }
  }
  is_takings.init({
  }, {
    sequelize,
    modelName: 'is_takings',
  });
  return is_takings;
};