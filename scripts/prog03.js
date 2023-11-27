
const btnTeste = document.querySelector("#btnTeste")
let compras = []


function chama(produto=""){ 
    if (compras.length > 0 ) {
        alert("O Carrinho já tem itens - Serão limpos")
        compras = []
    }
    containerItens.innerHTML = ""
    
    while (true) {
        if (produto == "sair") {
            break
        }
        else {
            produto = prompt("Digite um item para a lista:")
            if (produto == "sair") { 
                break 
            }
            compras.push(produto)
        }
}
    for (item of compras) {
        // containerItens.innerHTML += `<p>${item}</p>`
        let itemLista = document.createElement('li')
        let texItem = document.createTextNode(item)
        itemLista.appendChild(texItem)
        containerCompras.appendChild(itemLista)

    }

}


btnTeste.addEventListener("click", chama)