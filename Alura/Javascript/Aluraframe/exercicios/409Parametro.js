let listaDeNomes1 = ["Flávio", "Rogers", "Júlia"];
let listaDeNomes2 = ["Vieira", "Fernanda", "Gerson"];

exibeNoConsole([].concat(listaDeNomes1, listaDeNomes2))
//deve-se concatenar com uma array vazia primeiro para não alterar as variaveis

function exibeNoConsole(lista) {
  lista.forEach((item) => console.log(item));
}