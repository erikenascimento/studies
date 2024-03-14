/*
Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
*/
function saudacao(nome) {
	return `Olá ${nome}`;
}

console.log(saudacao("Ana"));

/*
Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
*/
function maioridade(idade) {
	if (idade >= 18) {
		return true;
	} else {
		return false;
	}
}

console.log("maioridade: ", maioridade(17));

/*
Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
*/
function palindromo(palavra) {
	if (palavra == palavra.split("").reverse().join("")) {
		return true;
	} else {
		return false;
	}
}

console.log("palíndromo: ", palindromo("kaiak"));
/*
Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
*/
function maiorNumero(numeroX, numeroY, numeroZ) {
	if (numeroX > numeroY && numeroX > numeroZ) {
		return "numeroX";
	} else if (numeroY > numeroX && numeroY > numeroZ) {
		return "numeroY";
	} else if (numeroZ > numeroX && numeroZ > numeroY) {
		return "numeroZ";
	} else {
		return "não existe numero maior";
	}
}

console.log(maiorNumero(3, 9, 2));
/*
Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
*/
const calculaPotencia = (base, expoente) => {
	return Math.pow(base, expoente);
};

console.log(calculaPotencia(2, 4));
