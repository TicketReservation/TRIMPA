const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports=(sequelize,DataTypes)=>{
  const SignIn = sequelize.define('signIn', {
  
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull:false
    }
  });
  return SignIn
}