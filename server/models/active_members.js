'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class active_members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      active_members.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
    }
  }
  active_members.init({
    initiation_semester: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'active_members',
  });
  return active_members;
};