const { Link } = require("../db.js")

const newUrl = async (req, res) => {
    try {

        const { Original_URL, Short_URL } = req.body

        //console.log(Original_URL, Short_URL)

        if (!Original_URL || !Short_URL) {
            res.status(400).json('no agregaste el link')
        }else{

            const urlCompare = await Link.findOne({
                where : {
                    Short_URL : Short_URL
                }
            })

            if (urlCompare) {
                res.status(400).json("El URL deberia de ser unico")
            }else{
                // guardamos datos a la base 
                const linkOriginal = await Link.create({
                    Original_URL : Original_URL,
                    Short_URL : Short_URL
                })

                console.log(linkOriginal)

                res.status(200).json("url creado")
            }
        }

    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    newUrl
}