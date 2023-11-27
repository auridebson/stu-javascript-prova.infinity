const btnConWhile = document.querySelector("#btnConWhile")
const btnReset = document.querySelector("#btnReset")
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

function reset() {
    containerResultado.innerHTML = ""
}

btnConWhile.addEventListener("click", contaWhile)
btnReset.addEventListener("click", reset)
