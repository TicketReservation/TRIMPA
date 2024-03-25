const mysql = require('mysql2');
const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize('Tripma', 'root', 'root', {
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

db.User=require('./UserModel')(connection,DataTypes)
db.Travel=require('./TravelModel')(connection,DataTypes)
db.Admin=require('./AdminModel')(connection,DataTypes)


<<<<<<< HEAD
// Sync the models with the database
// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Models synced with the database.')
//     })
//     .catch((error) => {
//         console.error('Unable to sync models with the database: ', error)
//     });
=======
//  connection.sync({force:true}) 
>>>>>>> a6e21a90e5ca1b2121c8a5215b4c8734411ac16e

module.exports = db;