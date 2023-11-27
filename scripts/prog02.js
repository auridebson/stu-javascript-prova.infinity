const btnConFor = document.querySelector("#btnConFor")

function contaFor() {
    containerItens.innerHTML = ""
    for (i=0; i<10; i++) {
        console.log(i)
        containerItens.innerHTML += `<p>${i} - Usando For</p>`
    }

}

btnConFor.addEventListener("click", contaFor)
btnReset.addEventListener("click", reset)