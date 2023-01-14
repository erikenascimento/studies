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
	InicializaMarcadores();
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

function CampoAtivaDesativa() {
	campoDigitacao.toggleClass("campoAtivado");
	campoDigitacao.toggleClass("campoDesativado");
}

function InicializaCronometro() {
	campoDigitacao.one("focus", function () {
		$("#botao-reiniciar").attr("disabled", true);
		let cronometroID = setInterval(function () {
			tempoDigitacao--;
			$("#tempo-digitacao").text(tempoDigitacao);
			if (tempoDigitacao <= 0) {
				campoDigitacao.attr("disabled", true);
				clearInterval(cronometroID);
				$("#botao-reiniciar").attr("disabled", false);
				CampoAtivaDesativa();
			}
		}, 1000);
	});
}

function InicializaMarcadores() {
	campoDigitacao.on("input", function () {
		let digitando = campoDigitacao.val();
		console.log("digitando", digitando);
		// Gambiarra pois o prettier está adicionando 5 espaços ao elemento
		let comparavel = frase.substring(5, digitando.length + 5);
		console.log("comparavel", comparavel);

		if (digitando == comparavel) {
			campoDigitacao.addClass("campoCorreto");
			campoDigitacao.removeClass("campoIncorreto");
		} else {
			campoDigitacao.addClass("campoIncorreto");
			campoDigitacao.removeClass("campoCorreto");
		}
	});
}

function ReiniciaJogo() {
	CampoAtivaDesativa();
	campoDigitacao.removeClass("campoCorreto");
	campoDigitacao.removeClass("campoIncorreto");
	campoDigitacao.attr("disabled", false);
	campoDigitacao.val("");
	contadorPalavras.text("0");
	contadorCaracteres.text("0");
	$("#tempo-digitacao").text(tempoInicial);
}
