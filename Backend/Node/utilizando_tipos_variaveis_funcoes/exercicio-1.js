/* 
Declare três variáveis diferentes (uma para cada tipo:
string, número e booleano) e atribua valores a elas.
Em seguida, exiba o tipo de cada variável no console.
*/

const texto = "um texto";
const numero = 123;
const booleano = "false";

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);

/*
Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome.
Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta
variável usando template strings. Por fim, imprima os resultados obtidos no console.
*/

const primeiroNome = "Erik";
const ultimoNome = "Nascimento";
const combinacaoMais = primeiroNome + ultimoNome;
const combinacaoTemplate = `${primeiroNome} ${ultimoNome}`;

console.log("combinacaoMais:", combinacaoMais);
console.log("combinacaoTemplate:", combinacaoTemplate);

/*
Declare duas variáveis, uma contendo um número e outra contendo uma string.
Em seguida, combine-as em uma terceira variável usando template strings para montar
uma frase e exiba o resultado no console.
*/

const outroNumero = 456;
const outraString = "outro texto";
const combinaFrase = `${outroNumero} ${outraString}`;

console.log("combinaFrase:", combinaFrase);

/*
Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua
um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
*/

let qualquerTipo = "um valor de qualquer tipo";
console.log("qualquerTipo:", qualquerTipo);
qualquerTipo = "um novo valor a essa variável";
console.log("qualquerTipo:", qualquerTipo);

/*
Declare uma variável usando var fora de um bloco de código (por exemplo, if)
e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele
utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e
compare com os resultados anteriores.
*/

var varDeclarada = "var declarada fora";

if (true) {
	var varDeclarada = "var declarada dentro";
	console.log("varDeclarada:", varDeclarada);
}

console.log("varDeclarada:", varDeclarada);

let letDeclarada = "let declarada fora";

if (true) {
	let letDeclarada = "let declarada dentro";
	console.log("letDeclarada:", letDeclarada);
}

console.log("letDeclarada:", letDeclarada);

/*
Declare uma variável booleana que informa se está chovendo e utilize-a em uma
estrutura condicional (if) para exibir uma mensagem informando se é preciso levar
um guarda-chuva ou não dependendo do valor da variável.
*/

const estaChovendo = false;

if (estaChovendo) {
	console.log("É preciso levar um guarda-chuva");
} else {
	console.log("Não é preciso levar guarda-chuva");
}
