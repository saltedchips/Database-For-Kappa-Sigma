'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class members extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      members.belongsTo(models.emergency_contacts, {
        foreignKey: {
          name: 'emergency_contact_name',  // The column in the members table that references the name in emergency_contacts
          type: DataTypes.STRING,  // The type should match the 'name' column in emergency_contacts
          allowNull: true,  // Allowing null if some members might not have an emergency contact
        },
        targetKey: 'ec_name'  // The 'name' column in the emergency_contacts table is the target for the foreign key
      });

      members.hasMany(models.members, {
        foreignKey: 'student_id', 
      });

      members.hasOne(models.members, {
        foreignKey: 'student_id_single', 
      });
      // define association here
    }
  }
  members.init({
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_hrs: {
      type: DataTypes.INTEGER
    },
    GPA: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    phone_num: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'members',
  });
  return members;
};