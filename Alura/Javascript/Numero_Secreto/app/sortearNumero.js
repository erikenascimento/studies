const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()
console.log("file: sortearNumero.js ~ line 4 ~ numeroSecreto", numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor+1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor