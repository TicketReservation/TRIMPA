const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Admin = sequelize.define('Admin', {
  
 
  });
  return Admin
}