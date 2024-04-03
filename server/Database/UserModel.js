const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:///:memory:')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'), 
      defaultValue: 'user' 
    }
  })

  return User
}