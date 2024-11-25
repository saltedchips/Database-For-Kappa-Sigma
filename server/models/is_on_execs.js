'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class is_on_execs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      is_on_execs.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id_single', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
      is_on_execs.belongsTo(models.exec_positions, {
        foreignKey: {
          name: 'exec_name', 
          type: DataTypes.STRING,  
          allowNull: false, 
        },
        targetKey: 'exec_name'  
      });
    }
  }
  is_on_execs.init({
    is_assistant: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    exec_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'is_on_execs',
  });
  return is_on_execs;
};