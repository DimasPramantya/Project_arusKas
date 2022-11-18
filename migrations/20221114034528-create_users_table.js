'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER(10),
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true
      },
      idRole: {
        type: Sequelize.INTEGER(4),
        allowNULL: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNULL: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(30),
        allowNULL: false
      },
      fullName: {
        type: Sequelize.STRING(50),
        allowNULL: false
      },
      division: {
        type: Sequelize.ENUM('Mobile', 'Web', 'Human Resource'),
        allowNULL: false
      },
      profilePict: {
        type: Sequelize.STRING(100),
        allowNULL: true
      }
      }, {
        timestamps: false,
      })
    },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
