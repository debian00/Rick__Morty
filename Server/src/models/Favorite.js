const { DataTypes, ENUM } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",//character
    {
      id: {
        type: DataTypes.INTEGER,        
        primaryKey: true,
        allowNull: false,
        //AUTOINCREMENT PARA INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNull: false,
      },

      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      gender: {
        type: DataTypes.ENUM("Male", "Female", "Genderless", "unknown"),
        allowNull: false,
      },

      origin: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
