const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports=(sequelize,DataTypes)=>{
  const User = sequelize.define('user', {
    
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull :false
    },
    password:{
      type: DataTypes.STRING,
      allowNull :false
    },
    picture:{
      type: DataTypes.STRING,
      allowNull :false
    }
  });
  return User
}