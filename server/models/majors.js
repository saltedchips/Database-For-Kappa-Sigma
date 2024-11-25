'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class majors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      majors.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
    }
  }
  majors.init({
  major: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  }, {
    sequelize,
    modelName: 'majors',
  });
  return majors;
};