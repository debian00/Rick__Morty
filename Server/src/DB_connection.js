require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const FavoriteModel = require("./models/Favorite");
const UserModel = require("./models/User");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

console.log(process.env.DB_USER); 

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   // URL
   { logging: false, native: false, host: "localhost", dialect: "postgres" }
 );
   // Test connection string
async function testConnection(){
      try {
         await sequelize.authenticate()
         console.log("DB SYSTEMS OPERATIONAL")
      } catch (error) {
         console.log("DB IS DOWN")
      }
testConnection();


}

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize);
FavoriteModel(sequelize);


// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

//Creamos tabla intermedia
User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, {through: "user_favorite"});


module.exports = {
    User,
    Favorite,
   conn: sequelize,
};
