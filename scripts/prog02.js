const btnConFor = document.querySelector("#btnConFor")

function contaFor() {
    containerResultado.innerHTML = ""
    for (i=0; i<10; i++) {
        console.log(i)
        containerResultado.innerHTML += `<p>${i}</p>`
    }

}

btnConFor.addEventListener("click", contaFor)