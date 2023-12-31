// conexcion a la base de datos
const {Sequelize} = require("sequelize")
require("dotenv").config()
const fs = require('fs');
const path = require('path');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PGDATABASE, DB_RENDER } = process.env

const USER = DB_USER || DATABASE_USER
const PASSWORD = DB_PASSWORD || DATABASE_PASSWORD
const HOST = DB_HOST || DATABASE_HOST
const NAME = DB_NAME || DATABASE_PGDATABASE

//const sequelize = new Sequelize(`postgres://${USER}:${PASSWORD}@${HOST}/${NAME}`, {
//    logging: false, // set to console.log to see the raw SQL queries
//    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//})

const sequelize = new Sequelize(DB_RENDER, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  //dialectOptions: {
  //  ssl: {
  //    require: true,
  //  }
  //}
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Link } = sequelize.models

console.log(sequelize.models)


module.exports = {
    conn : sequelize,
    Link,
    ...sequelize.models
}