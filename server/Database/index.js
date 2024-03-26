const mysql = require('mysql2');
const { Sequelize,DataTypes } = require('sequelize');
const { DATABASE_Name, DATABASE_USERNAME, DATABASE_PASSWORD } = require("./config.js");

const connection = new Sequelize (DATABASE_Name, DATABASE_USERNAME, DATABASE_PASSWORD, {
  dialect: 'mysql'
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
db.Flight=require('./FlightModel')(connection,DataTypes)
db.Sit=require('./SitModel')(connection,DataTypes)
db.Booking=require('./BookingModel')(connection,DataTypes)



db.User.hasMany(db.Flight, { foreignKey: 'userId' });
db.Flight.belongsTo(db.User, { foreignKey: 'userId' });

db.Flight.hasMany(db.Booking, { foreignKey: 'flightId' });
db.Booking.belongsTo(db.Flight, { foreignKey: 'flightId' });


db.Flight.hasMany(db.Sit, { foreignKey: 'flightId' });
db.Sit.belongsTo(db.Flight, { foreignKey: 'flightId' });


db.Booking.belongsTo(db.User, { foreignKey: 'userId' });
db.Booking.belongsTo(db.Flight, { foreignKey: 'flightId' });







// Sync the models with the database
// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Models synced with the database.')
//     })
//     .catch((error) => {
//         console.error('Unable to sync models with the database: ', error)
//     });
 

module.exports = db;