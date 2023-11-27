
const btnTeste = document.querySelector("#btnTeste")



function chama(){ 
    let palavra = "JavaScript"
    for (caractere of palavra) {
        console.log(caractere)
    }
}


btnTeste.addEventListener("click", chama)