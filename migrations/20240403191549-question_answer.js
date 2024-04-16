'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('question_answers', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      option_one: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option_two: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option_three: {
        type: Sequelize.STRING,
        allowNull: false
      },
      option_four: {
        type: Sequelize.STRING,
        allowNull: false
      },
      correct_answer: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('question_answers');
  }
};
