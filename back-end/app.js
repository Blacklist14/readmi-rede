const express = require("express")
const app = express()
const cors = require("cors")
const mark = require("./Routers/markDown")

app.use(cors())
app.use("/",mark)
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(4444 ,() => {
    console.log("server rodando")
})