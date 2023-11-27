const btnConWhile = document.querySelector("#btnConWhile")
const containerResultado = document.querySelector(".container-resultado")

function contaWhile() {
    let count = 0
    containerResultado.innerHTML = ""
    while (count < 10) {
        console.log(count)
        containerResultado.innerHTML += `<p>${count}</p>`
        count ++
    }
}


btnConWhile.addEventListener("click", contaWhile) 
