const express = require("express")
const routes = express.Router()

const { getUrl } = require("../controllers/getUrl.js")

routes.get("/", getUrl)

module.exports = routes