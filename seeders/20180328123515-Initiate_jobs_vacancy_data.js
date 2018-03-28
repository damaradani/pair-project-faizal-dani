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
    return queryInterface.bulkInsert('Job_vacancies',
    [
      {
        name:"Driver",
        field_of_work: "Driver",
        required_gender: "male",
        required_age: 20,
        required_education: "SMA/SMK",
        required_experience: 1,
        salary: 1500000,
        status: "open",
        CompanyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Driver",
        field_of_work: "Driver",
        required_gender: "male",
        required_age: 20,
        required_education: "SMA/SMK",
        required_experience: 2,
        salary: 1700000,
        status: "open",
        CompanyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Business Development & Franchise Manager [BDFM]",
        field_of_work: "Business",
        required_gender: "",
        required_age: 30,
        required_education: "S1",
        required_experience: 3,
        salary: 15000000,
        status: "open",
        CompanyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Product Specialist",
        field_of_work: "Health",
        required_gender: "",
        required_age: 21,
        required_education: "D3",
        required_experience: 0,
        salary: 3100000,
        status: "open",
        CompanyId: 4,
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
