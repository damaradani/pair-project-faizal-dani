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
    return queryInterface.bulkInsert('Companies',
      [
        {
          name: "OPTIK GOMAX INDONESIA, PT",
          location: "Depok",
          email: "optikgomaxindonesia@gmail.com",
          website: "optikgomaxindonesia.co.id",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "TRANSMEKA INTI MULIA, PT",
          location: "Cikarang",
          email: "transmekaIntiMulia@gmail.com",
          website: "transmekaIntiMulia.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CIPTA BAJA TRIMATRA, PT",
          location: "Cikarang",
          email: "ciptabajatrimata@gmail.com",
          website: "ciptabajatrimata.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "CAHAYA TIGA BINTANG ABADI, PT",
          location: "DKI Jakarta",
          email: "cahayatiga@gmail.com",
          website: "cahayatiga.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
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
