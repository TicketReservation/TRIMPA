
const mysql = require('mysql2')
const { Sequelize ,DataTypes } = require('sequelize')
const { DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD } = require("./config.js")
<<<<<<< HEAD
// const connection = new Sequelize('tripma', 'root', '1920', {
=======
// const connection = new Sequelize('tripma', 'root', 'root', {
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9
//   host: 'localhost',
//   dialect: 'mysql',
//   logging:false
// });
<<<<<<< HEAD

const connection = new Sequelize (DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
  logging: false
=======
 
const connection = new Sequelize (DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
  dialect: 'mysql'
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9
})


async function connectionTest (){
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
  connectionTest()
  const db={}

db.User=require('./UserModel')(connection,DataTypes)
db.Flight=require('./FlightModel')(connection,DataTypes)
db.Sit=require('./SitModel')(connection,DataTypes)
db.Booking=require('./BookingModel')(connection,DataTypes)

db.Admin = require('./AdminDachbord.js')(connection, DataTypes);
const Admin = require('./AdminDachbord.js')(connection, DataTypes);
const User =require('./UserModel.js')(connection,DataTypes)

db.Admin = require('./AdminDachbord.js')(connection, DataTypes);
const Admin = require('./AdminDachbord.js')(connection, DataTypes);
const User =require('./UserModel.js')(connection,DataTypes)


db.User.hasMany(db.Flight, { foreignKey: 'userId' })
db.Flight.belongsTo(db.User, { foreignKey: 'userId' })

db.Flight.hasMany(db.Booking, { foreignKey: 'flightId' })
db.Booking.belongsTo(db.Flight, { foreignKey: 'flightId' })


db.Flight.hasMany(db.Sit, { foreignKey: 'flightId' })
db.Sit.belongsTo(db.Flight, { foreignKey: 'flightId' })


db.Booking.belongsTo(db.User, { foreignKey: 'userId' })
db.Booking.belongsTo(db.Flight, { foreignKey: 'flightId' })



db.User.hasMany(db.Admin, { foreignKey: 'userId' });
db.Admin.belongsTo(db.User, { foreignKey: 'userId' });


db.User.hasMany(db.Admin, { foreignKey: 'userId' });
db.Admin.belongsTo(db.User, { foreignKey: 'userId' });





// Sync the models with the database
<<<<<<< HEAD

=======
// connection.sync({ force: true })
//     .then(() => {
//         console.log('Models synced with the database.')
//     })
//     .catch((error) => {
//         console.error('Unable to sync models with the database: ', error)
//     })
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9
 

module.exports = {connection,Admin,User}