'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('validations', {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      memberId: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      token: {
        type: Sequelize.INTEGER(4),
        allowNull: false
      },
      expiredDate: {
        type: Sequelize.DATE(),
        allowNull: false,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('validations')
  }
};
