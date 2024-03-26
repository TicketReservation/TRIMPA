const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports=(sequelize,DataTypes)=>{
  const Flight = sequelize.define('Flight', {
  
    companyName: {
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
    departure: {
          type: DataTypes.STRING,
          allowNull :false
        },
    destination: {
            type: DataTypes.STRING,
            allowNull :false
          },
    arrival: {
              type: DataTypes.DATE,
              allowNull :false
            }
  });
  return Flight
}