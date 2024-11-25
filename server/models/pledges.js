'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pledges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pledges.belongsTo(models.members, {
        foreignKey: {
          name: 'student_id', 
          type: DataTypes.INTEGER,  
          allowNull: false, 
        },
        targetKey: 'student_id'  
      });
    }
  }
  pledges.init({
    pledging_semester: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'pledges',
  });
  return pledges;
};