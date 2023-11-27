const btnConWhile = document.querySelector("#btnConWhile")
const btnReset = document.querySelector("#btnReset")
const containerItens = document.querySelector(".container-itens")
const containerCompras = document.querySelector(".container-compras")

function contaWhile() {
    let count = 0
    containerItens.innerHTML = ""
    while (count < 10) {
        console.log(count)
        containerItens.innerHTML += `<p>${count}</p>`
        count ++
    }
}

function reset() {
    containerItens.innerHTML = ""
}

btnConWhile.addEventListener("click", contaWhile)
btnReset.addEventListener("click", reset)
