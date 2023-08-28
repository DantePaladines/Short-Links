const express = require("express")
const routerPost = express.Router()

const { newUrl } = require("../controllers/urlShort.js")

routerPost.post("/", newUrl)

module.exports = routerPost