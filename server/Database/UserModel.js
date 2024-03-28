const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:///:memory:')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  })

  return User
}