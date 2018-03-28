'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidate = sequelize.define('Candidate', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    expected_sallary: DataTypes.INTEGER,
    experience: DataTypes.STRING,
    field_of_work: DataTypes.STRING,
    education: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  Candidate.associate = function(models) {
    // associations can be defined here
    Candidate.belongsToMany(models.Job_vacancy, {
      through: models.Candidates_job
    })

    Candidate.hasMany(models.Candidates_job);
  };
  return Candidate;
};
