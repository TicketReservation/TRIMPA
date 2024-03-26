const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports=(sequelize,DataTypes)=>{
  const Travel = sequelize.define('Travel', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER
      
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull :false
    },
    description: {
        type: DataTypes.STRING,
        allowNull :false
      },
      depart: {
          type: DataTypes.STRING,
          allowNull :false
        },
     destination: {
            type: DataTypes.STRING,
            allowNull :false
          },
      date: {
              type: DataTypes.DATE,
              allowNull :false
            }
  });
  return Travel
}