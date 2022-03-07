
//Busca historia
buttonBusca.addEventListener("click", () => {
    const buttonBusca = document.querySelector("#buttonBusca")
    const caixa = document.getElementById("caixinha")
    const nome = document.querySelector("#nameBusca")
    //muda cor do botão
    buttonBusca.style.backgroundColor = "#465aa1"
    setTimeout(() => {
        buttonBusca.style.backgroundColor = "#7289DA"
    }, 100)
    //buscaHistoria
    if(nome.value.length > 0){
        axios.get(`http://localhost:4444/mark/${nome.value}.md`).then(async (response) => {
            caixa.innerHTML = response.data
        },(error)=>{alert("Historia não existe")})
    }else{
        alert("Digite uma historia")
    }
})

//Busca ao pressionar enter dentro do campo de busca
const busca = document.querySelector("#nameBusca")
busca.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        buttonBusca.click()
    }
})