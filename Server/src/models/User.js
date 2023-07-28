const { DataTypes, INTEGER } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
         id:{
               type: DataTypes.UUID,
               defaultValue: DataTypes.UUIDV4,//Genera Hexadecimal
               primaryKey: true,
               allowNull:false,                          
         },

         email:{
              type: DataTypes.STRING,
              allowNull: false,
              unique: true,
              isEmail: true,
         },

         password:{
               type: DataTypes.STRING,
               allowNull:false,

         }

   }, { timestamps: true });
};
