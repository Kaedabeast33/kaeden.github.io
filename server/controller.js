const path = require("path")
const axios = require("axios")

module.exports = {
    getHTML: (req,res) => {
           // console.log(__dirname)
           res.sendFile(path.join(__dirname,"../client/index.html"))
       }
    }