const express = require("express")
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))
// app.use(express.then(res=>{
// res.send
// }))

// app.use(express.static())


app.listen(4050,console.log("she's a go on 4050"))