// tener todas las configuraciones de del server
const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const bodyParse = require("body-parser")
const server = express()

const Routes = require("./Routes/index.js")

server.use(express.json())
server.use(morgan("dev"))
server.use(bodyParse.urlencoded({ extended: true, limit: '50mb' }));

server.use(cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

server.use("/", Routes)

module.exports = server