'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      RtId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rts',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.ENUM('Pending', 'In Progress', 'Completed'),
        allowNull: false,
        defaultValue: 'Pending'
      },
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: true
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
    await queryInterface.dropTable('Reports');
  }
};