'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidates_job = sequelize.define('Candidates_job', {
    CandidatesId: DataTypes.INTEGER,
    Job_vacancyId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Candidates_job.associate = function(models) {
    // associations can be defined here
  };
  return Candidates_job;
};