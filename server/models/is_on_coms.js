'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_on_coms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      is_on_coms.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
      is_on_coms.belongsTo(models.committees, {
        foreignKey: {
          name: 'com_name', 
          type: DataTypes.STRING,  
          allowNull: false, 
        },
        targetKey: 'name'  
      });
    }
  }
  is_on_coms.init({
  }, {
    sequelize,
    modelName: 'is_on_coms',
  });
  return is_on_coms;
};