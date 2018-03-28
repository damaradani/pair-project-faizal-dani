'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Job_vacancy);
  };
  return Company;
};
