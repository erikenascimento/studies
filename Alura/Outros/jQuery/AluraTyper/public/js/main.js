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

function CampoAtivaDesativaBorda() {
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
				clearInterval(cronometroID);
				FinalizaJogo();
			}
		}, 1000);
	});
}

function InicializaMarcadores() {
	campoDigitacao.on("input", function () {
		let digitando = campoDigitacao.val();
		// Gambiarra pois o prettier está adicionando 5 espaços ao elemento
		let comparavel = frase.substring(5, digitando.length + 5);

		if (digitando == comparavel) {
			campoDigitacao.addClass("campoCorreto");
			campoDigitacao.removeClass("campoIncorreto");
		} else {
			campoDigitacao.addClass("campoIncorreto");
			campoDigitacao.removeClass("campoCorreto");
		}
	});
}

function FinalizaJogo() {
	campoDigitacao.attr("disabled", true);
	$("#botao-reiniciar").attr("disabled", false);
	CampoAtivaDesativaBorda();
	InserePlacar();
}

function InserePlacar() {
	let corpoTabela = $("#corpo-tabela");

	let jogador = "Erik";

	corpoTabela.append(`
	<tr>
		<td>${jogador}</td>
		<td>${parseInt(contadorPalavras.text()) + 1}</td>
		<td>
			<a href="#">
				<i class="small material-icons" id="botao-remover">delete</i>
			</a>
		<td>
	</tr>`);

	$("#botao-remover").click(function (event) {
		event.preventDefault();
		$(this).parent().parent().parent().remove();
	});
}

function ReiniciaJogo() {
	CampoAtivaDesativaBorda();
	campoDigitacao.removeClass("campoCorreto");
	campoDigitacao.removeClass("campoIncorreto");
	campoDigitacao.attr("disabled", false);
	campoDigitacao.val("");
	contadorPalavras.text("0");
	contadorCaracteres.text("0");
	$("#tempo-digitacao").text(tempoInicial);
}
