'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Candidates_jobs',
    [
      {
        CandidateId: 1,
        JobVacancyId: 3,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CandidateId: 1,
        JobVacancyId: 3,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CandidateId: 2,
        JobVacancyId: 4,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CandidateId: 3,
        JobVacancyId: 1,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CandidateId: 3,
        JobVacancyId: 2,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
