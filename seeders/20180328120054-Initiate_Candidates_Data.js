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
    return queryInterface.bulkInsert('Candidates',
      [
        {
          name: "John Doe",
          gender: "male",
          age: 29,
          location: "Cikarang",
          email: "johndoe@gmail.com",
          phone: "097546281638216",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Serena Williams",
          gender: "female",
          age: 25,
          location: "DKI Jakarta",
          email: "serenawilliams@gmail.com",
          phone: "0623813448134124",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Greg Williams",
          gender: "male",
          age: 20,
          location: "Bogor",
          email: "gregwilliam@gmail.company",
          phone: "077812318346124",
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
