
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
    axios.get(`http://localhost:4444/${nome.value}.md`).then(async (response) => {
        caixa.innerHTML = response.data
    })
})

//Busca ao pressionar enter dentro do campo de busca
const busca = document.querySelector("#nameBusca")
busca.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        buttonBusca.click()
    }
})