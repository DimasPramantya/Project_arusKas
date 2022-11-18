'use strict';
const {Role} = require('../models/index');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const admin = await Role.findOne({
      where:{
        roleName:'admin'
      }
    })

    const hashPassword = await bcrypt.hash('admin123', 10);

    await queryInterface.bulkInsert('users',[{
      fullName: 'Shazi awaludin',
      idRole: admin.id,
      email: 'admin@gmail.com',
      password:hashPassword,
      division: 'Mobile'
    }],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
