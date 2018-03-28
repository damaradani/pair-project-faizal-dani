'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidates_job = sequelize.define('Candidates_job', {
    CandidateId: DataTypes.INTEGER,
    JobVacancyId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Candidates_job.associate = function(models) {
    // associations can be defined here
    Candidates_job.belongsTo(models.Candidate)
    Candidates_job.belongsTo(models.Job_vacancy)
  };
  return Candidates_job;
};
