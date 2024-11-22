'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class active_member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  active_member.init({
    student_id: DataTypes.INTEGER,
    initiation_semester: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'active_member',
  });
  return active_member;
};