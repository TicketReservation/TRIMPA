const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:///:memory:')

module.exports=(sequelize,DataTypes)=>{
const Booking = sequelize.define('booking', {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StartDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    EndDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
})
  return Booking
}