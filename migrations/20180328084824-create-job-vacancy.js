'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Job_vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      field_of_work: {
        type: Sequelize.STRING
      },
      required_gender: {
        type: Sequelize.STRING
      },
      required_age: {
        type: Sequelize.INTEGER
      },
      required_education: {
        type: Sequelize.STRING
      },
      required_experience: {
        type: Sequelize.INTEGER
      },
      salary: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      CompanyId: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Job_vacancies');
  }
};