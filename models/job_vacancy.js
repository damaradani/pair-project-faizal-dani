'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job_vacancy = sequelize.define('Job_vacancy', {
    name: DataTypes.STRING,
    field_of_work: DataTypes.STRING,
    required_gender: DataTypes.STRING,
    required_age: DataTypes.INTEGER,
    required_education: DataTypes.STRING,
    required_experience: DataTypes.INTEGER,
    salary: DataTypes.INTEGER,
    status: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER
  }, {});
  Job_vacancy.associate = function(models) {
    // associations can be defined here
  };
  return Job_vacancy;
};