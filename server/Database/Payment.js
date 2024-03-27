const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite:///:memory:');

module.exports=(sequelize,DataTypes)=>{
    const Payment = sequelize.define('Payment', {
      
        NameOnCard: {
            type: DataTypes.STRING,
            allowNull: false  
           
          },
          CardNumber: {
            type: DataTypes.BIGINT.UNSIGNED,
            unique: true,
            // primaryKey:true
            
          },
          ExpirationDate:{
            type : DataTypes.STRING
           
        },  
          CVV:  {
            type : DataTypes.INTEGER,
            len:[3]
          }
    })
    return Payment
  }
