const buttonBusca = document.querySelector("#buttonBusca").addEventListener("click",()=>{
    //muda cor do botão
    buttonBusca.style.backgroundColor = "#465aa1"
    setTimeout(() => {
        buttonBusca.style.backgroundColor = "#7289DA"
    }, 100)
})