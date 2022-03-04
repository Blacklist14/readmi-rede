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
router.get("/:nome",async (req, res) => {
    const nome = req.params.nome
    const texto = await fs.readFile("./upload/" + nome,"utf8")
    const conv = md.render(texto)
    res.send(conv)
})

router.post("/:id",upload.single('readme'),(req,res)=>{
    res.send("arquivo criado")
})

module.exports = router