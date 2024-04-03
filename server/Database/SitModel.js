const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite:///:memory:')

module.exports=(sequelize,DataTypes)=>{
const Sit = sequelize.define('sit', {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Type: {
        type: DataTypes.ENUM('economic', 'vip'),
        allowNull: false
    },
    valid:{
        type: DataTypes.BOOLEAN,
        allowNull :false,
        defaultValue: false
    }
  
});
  return Sit
}