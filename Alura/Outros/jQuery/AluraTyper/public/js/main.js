let frase = $(".frase").text();
let tamanhoFrase = $("#tamanho-frase");

let numPalavras = frase.split(/\s+/).length - 1;

tamanhoFrase.text(numPalavras);

const campoDigitacao = $("#campo-digitacao");
const contadorCaracteres = $("#contador-caracteres");
const contadorPalavras = $("#contador-palavras");

$(document).ready(function () {
	InicializaContadores();
	InicializaCronometro();
	$("#botao-reiniciar").click(ReiniciaJogo);
});

function InicializaContadores() {
	campoDigitacao.on("input", function () {
		var numCaracteres = campoDigitacao.val().length;
		var numPalavras = campoDigitacao.val().split(/\s+/).length - 1;

		contadorCaracteres.text(numCaracteres);
		contadorPalavras.text(numPalavras);
	});
}

let tempoDigitacao = $("#tempo-digitacao").text();
const tempoInicial = tempoDigitacao;

function InicializaCronometro() {
	campoDigitacao.one("focus", function () {
		let cronometroID = setInterval(function () {
			tempoDigitacao--;
			$("#tempo-digitacao").text(tempoDigitacao);
			if (tempoDigitacao <= 0) {
				campoDigitacao.attr("disabled", true);
				clearInterval(cronometroID);
			}
		}, 1000);
	});
}

function ReiniciaJogo() {
	campoDigitacao.attr("disabled", false);
	campoDigitacao.val("");
	contadorPalavras.text("0");
	contadorCaracteres.text("0");
	$("#tempo-digitacao").text(tempoInicial);
}
