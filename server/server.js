const express = require("express")
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))


app.listen(4050,console.log("she's a go on 4050"))