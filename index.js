// crear servidor
require("dotenv").config()
const server = require("./src/App")
const {conn} = require("./src/db.js")

const { DB_PORT, DATABASE_PORT } = process.env

const PORT = DB_PORT || DATABASE_PORT

conn.sync({ force : false, alert : true }).then(() => {
    server.listen( PORT ,() => {
        try {
            console.log(`El servidor esta Cortriendo en el puerto ${PORT}`)
    
        } catch (error) {
            console.log(error)
        }
    })
}).catch((error) => {
    console.log(error)
})

