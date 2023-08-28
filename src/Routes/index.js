// base de las rutas hacia las peticiones
const express = require("express")
const Routes = express.Router()
const testPrueba = require("./rutaPrueba.js")
const postUrl = require("./urlPost.js")

Routes.use("/getUrl", testPrueba)
Routes.use("/url", postUrl)

module.exports = Routes