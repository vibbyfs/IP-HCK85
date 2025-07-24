'use strict';

const { hashPassword } = require('../helpers/bcryptjs');
const address = require('../models/address');
const citizen = require('../models/citizen');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const users = require('../data/users.json');
    const categories = require('../data/categories.json');
    const reports = require('../data/reports.json');
    const comments = require('../data/comments.json');
    const transactions = require('../data/transactions.json')
    const citizens = require('../data/citizens.json')
    const addresses = require('../data/addresses.json')


    for (const user of users) {
      delete user.id;
      user.password = hashPassword(user.password);
      user.createdAt = new Date();
      user.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Users', users);

    for (const category of categories) {
      delete category.id;
      category.createdAt = new Date();
      category.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Categories', categories);

    for (const report of reports) {
      delete report.id;
      report.createdAt = new Date();
      report.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Reports', reports);

    for (const comment of comments) {
      delete comment.id;
      comment.createdAt = new Date();
      comment.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Comments', comments);

    for (const transaction of transactions) {
      delete transaction.id;
      transaction.createdAt = new Date();
      transaction.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Transactions', transactions);

    for (const address of addresses) {
      delete address.id;
      address.createdAt = new Date();
      address.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Addresses', addresses);

    for (const citizen of citizens) {
      delete citizen.id;
      citizen.createdAt = new Date();
      citizen.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Citizens', citizens);



  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Citizens', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Addresses', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Transactions', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Comments', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Reports', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Categories', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Users', null, { truncate: true, restartIdentity: true, cascade: true });
  }
};
