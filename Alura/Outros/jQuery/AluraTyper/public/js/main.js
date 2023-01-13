let frase = $(".frase").text();
let tamanhoFrase = $("#tamanho-frase");

let numPalavras = frase.split(/\s+/).length - 1;

tamanhoFrase.text(numPalavras);

let campoDigitacao = $("#campo-digitacao");
let contadorCaracteres = $("#contador-caracteres");
let contadorPalavras = $("#contador-palavras");

campoDigitacao.on("input", function () {
	let numCaracteres = campoDigitacao.val().length;
	let numPalavras = campoDigitacao.val().split(/\s+/).length - 1;

	contadorCaracteres.text(numCaracteres);
	contadorPalavras.text(numPalavras);
});
