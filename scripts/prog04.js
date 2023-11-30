

const faixas = [
    {faixa: "sem faixa", tempo: 6},
    {faixa: "amarela", tempo: 12},
    {faixa: "laranja", tempo: 18},
    {faixa: "verde", tempo: 18},
    {faixa: "azul", tempo: 24},
    {faixa: "marrom", tempo: 24},
    {faixa: "preta 1º DAN", tempo: 24},
    {faixa: "preta 2º DAN", tempo: 24},
    {faixa: "preta 3º DAN", tempo: 24},
    {faixa: "preta 4º DAN", tempo: 24},
    {faixa: "preta 5º DAN", tempo: 24},
    {faixa: "vermelha 6º DAN", tempo: 24},
    {faixa: "vermelha 7º DAN", tempo: 24},
    {faixa: "vermelha 8º DAN", tempo: 24},
    {faixa: "vermelha 9º DAN", tempo: 24},
    {faixa: "vermelha 10º DAN", tempo: 24}
]

let fruits = ["banana", "coco", "morango", "melão", "melancia", "manga"]
let frutasRemovidas = []


for (obj of faixas) {
    console.log(obj.faixa +" - "+ obj.tempo + " meses")
}
