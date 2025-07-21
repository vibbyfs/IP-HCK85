'use strict';

const { hashPassword } = require('../helpers/bcryptjs');

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
    const followups = require('../data/followups.json');
    const reportHistories = require('../data/report_histories.json');
    const roles = require('../data/roles.json');
    const rts = require('../data/rts.json');

    for (const role of roles) {
      delete role.id;
      role.createdAt = new Date();
      role.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Roles', roles);

    for (const rt of rts) {
      delete rt.id;
      rt.createdAt = new Date();
      rt.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('Rts', rts);

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

    for (const followup of followups) {
      delete followup.id;
      followup.createdAt = new Date();
      followup.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('FollowUps', followups);

    for (const reportHistory of reportHistories) {
      delete reportHistory.id;
      reportHistory.createdAt = new Date();
      reportHistory.updatedAt = new Date();
    }
    await queryInterface.bulkInsert('ReportHistories', reportHistories);

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Comments', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('FollowUps', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('ReportHistories', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Reports', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Categories', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Users', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Roles', null, { truncate: true, restartIdentity: true, cascade: true });
    await queryInterface.bulkDelete('Rts', null, { truncate: true, restartIdentity: true, cascade: true });
  }
};
