const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('Tripma', 'root', 'dhia2002', {
  host: 'localhost',
  dialect:'mysql'
});

async function connectionTest (){     
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
  connectionTest()
  const db={}

db.User=require('../model-mysql/UserModel')(connection,DataTypes)
db.Travel=require('../model-mysql/TravelModel')(connection,DataTypes)
db.Admin=require('../model-mysql/AdminModel')(connection,DataTypes)
// db.Payment=require('../model-mysql/Payment')(connection,DataTypes)

//  connection.sync({force:true}) 

module.exports = db;