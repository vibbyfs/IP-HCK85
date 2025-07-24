'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      provinceId: {
        type: Sequelize.STRING
      },
      provinceName: {
        type: Sequelize.STRING
      },
      regencyId: {
        type: Sequelize.STRING
      },
      regencyName: {
        type: Sequelize.STRING
      },
      districtId: {
        type: Sequelize.STRING
      },
      districtName: {
        type: Sequelize.STRING
      },
      villageId: {
        type: Sequelize.STRING
      },
      villageName: {
        type: Sequelize.STRING
      },
      rt: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.TEXT
      },
      postalCode: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Addresses');
  }
};