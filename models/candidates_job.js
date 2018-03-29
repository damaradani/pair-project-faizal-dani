'use strict';
module.exports = (sequelize, DataTypes) => {
  var Candidates_job = sequelize.define('Candidates_job', {
    CandidateId: DataTypes.INTEGER,
    JobVacancyId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    hooks:{
      //isi status
      // beforeCreate: () => {
      //   Candidates_job.status = "Applied";
      // }

    }
  });
  Candidates_job.associate = function(models) {
    // associations can be defined here
    Candidates_job.belongsTo(models.Candidate)
    Candidates_job.belongsTo(models.Job_vacancy)
  };

  Candidates_job.showCandidatesApply = function(CandidateId, Candidate, Job_vacancy, Company){
    return new Promise(function(resolve, reject){
      Candidates_job.findAll(
        {
          where:{CandidateId:CandidateId},
          include:[
            {
              model:Candidate
            },
            {
              model: Job_vacancy,
              include: [{model:Company}]
            }
          ]
        }
      )
      .then(candidatesJob =>{
        resolve(candidatesJob)
      })
      .catch(err =>{
        reject(err);
      })
    })
  }

  Candidates_job.showJobVacancy = function(CandidateId, Candidate, Job_vacancy, Company){
    return new Promise(function(resolve, reject){
      Candidates_job.findAll(
        {
          where:{CandidateId:{$ne:CandidateId}},
          include:[
            {
              model:Candidate
            },
            {
              model: Job_vacancy,
              include: [{model:Company}]
            }
          ]
        }
      )
      .then(Job_vacancy =>{
        resolve(Job_vacancy)
      })
      .catch(err =>{
        reject(err);
      })
    })
  }


  return Candidates_job;
};
