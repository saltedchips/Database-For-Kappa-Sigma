'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('member', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GPA: {
        type: Sequelize.FLOAT,
        allowNull: false,
        unique: true
      },
      Student_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      Service_Hours: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      Phone_Number: {
        type: Sequelize.STRING
      },
      First_Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Last_Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.createTable('address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      City: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      State: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Zip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Member_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "member",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('member');
  }
};