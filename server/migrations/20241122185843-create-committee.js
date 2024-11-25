'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('committees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'members',
          key: 'student_id'
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      budget: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      exec_name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'exec_positions',
          key: 'exec_name'
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
    await queryInterface.dropTable('committees');
  }
};