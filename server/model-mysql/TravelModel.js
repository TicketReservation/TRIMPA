const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports=(sequelize,DataTypes)=>{
  const Products = sequelize.define('prod', {
  
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
      }
  });
  return Products
}