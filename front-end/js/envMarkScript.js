const nameFile = document.querySelector("#nameFile")
const inputFile = document.querySelector("#fileEnv")
const buttonEnv = document.querySelector("#buttonEnv")
const caixa = document.querySelector("#caixinha")

buttonEnv.addEventListener("click", async () => {
    if (nameFile.value.length > 1 & inputFile.value != "" ) {
        const files = inputFile.files[0]
        const formData = new FormData()
        formData.append('readme', files)
        //Mostra todos os arquivos cadastrados
        await axios.get("http://localhost:4444/mark").then((response) => {
            return caixa.innerHTML = response.data + "," + nameFile.value +".md"
        }, (error) => {
            return caixa.innerHTML = error
        })

        //Envia arquivo com nome
        await axios.post(`http://localhost:4444/mark/${nameFile.value}.md`, formData).then((response) => {
                return alert(response.data)
            }, (error) => {
                return alert(error)
            })
            .catch((error) => {
                return alert(error)
            })
    }
    else{
        alert("Adicione o arquivo e o nome!!!")
    }
})