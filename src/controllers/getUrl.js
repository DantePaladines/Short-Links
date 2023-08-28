const { Link } = require("../db")

const getUrl = async (req, res) => {
    try {

        const allUrl = await Link.findAll()

        console.log("server hit")
        res.status(200).json(allUrl)
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUrl
}