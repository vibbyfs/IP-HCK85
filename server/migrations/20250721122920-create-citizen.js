'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Citizens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      nationalId: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dateOfBirth: {
        type: Sequelize.DATE
      },
      placeOfBirth: {
        type: Sequelize.STRING
      },
      religion: {
        type: Sequelize.STRING
      },
      maritalStatus: {
        type: Sequelize.STRING
      },
      bloodType: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      AddressId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Citizens');
  }
};