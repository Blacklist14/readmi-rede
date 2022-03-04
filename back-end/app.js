const express = require("express")
const cors = require("cors")
const app = express()

app.use(require("./Router"))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.listen(4444 ,() => {
    console.log("server rodando")
})