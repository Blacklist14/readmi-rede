async function uploadreadme() {
    const file = document.querySelector("#uploadForm")
    const nomeArquivo = document.querySelector("#nameArquivo")
    event.preventDefault()
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("readme", imagefile.files[0]);
    await axios.post(`http://localhost:4444/${nomeArquivo.value}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
var caixa = document.getElementById("caixinha")

const buttonBusca = document.querySelector("#buttonBusca").addEventListener("click",()=>{
    const nome = document.querySelector("#nameBusca")
    axios.get(`http://localhost:4444/${nome.value}readme.md`).then(async (response)=>{
    caixa.innerHTML = response.data
})
})