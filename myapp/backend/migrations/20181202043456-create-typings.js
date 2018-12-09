'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('typings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      output: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      author: {
        allowNull: true,
        type: Sequelize.STRING
      },
      language: {
        allowNull: true,
        type: Sequelize.STRING
      },
      version: {
        allowNull: true,
        type: Sequelize.STRING
      },
      rank: {
        allowNull: true,
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('typings');
  }
};