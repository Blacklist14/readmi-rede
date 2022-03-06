const router = require("express").Router()
const fs = require("fs-extra")
const cors = require("cors")
const md = require("markdown-it")()
const multer = require("multer")

const upload = multer({
    dest: 'upload/',
    fileFilter(req,file,cb){
        const arquivo = "text/markdown"
        if(arquivo.includes(file.mimetype)){
            cb(null,true)
        }
        else{
            cb(new Error("arquivo invalido"))
        }
    },
    storage:multer.diskStorage({
        destination:(req,file,cb) =>{
            cb(null,'upload/')
        },
        filename: (req,file,cb)=>{
            const id = req.params.id
            cb(null,id)
        }
    })
})
router.use(cors())
// Busca arquivo pelo nome 
router.get("/:nome",async (req, res) => {
    const nome = req.params.nome
    const texto = await fs.readFile("./upload/" + nome,"utf8").then((reponse)=>{
        const conv = md.render(reponse)
        res.status(200).send(conv)
    },(error)=>{res.status(404).send(error)})
})
// Pega todos arquivos cadastrados
router.get("/",async (req,res) => {
    const arquivos = await fs.readdir("./upload")
    .then((reponse)=>{res.status(200).send(reponse)},
    (error)=>{res.status(404).send(error)})
})
// Envia um novo arquivo
router.post("/:id",upload.single('readme'),(req,res)=>{
    res.send("arquivo criado")
})


module.exports = router