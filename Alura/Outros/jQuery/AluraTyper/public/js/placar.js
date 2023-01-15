let placar = $(".placar");
let corpoTabela = $("#corpo-tabela");

let botaoPlacar = $("#botao-placar");
let botaoRemover = $("#botao-remover");

botaoPlacar.click(MostraPlacar);

function MostraPlacar() {
	placar.stop().slideToggle(600);
}

function NovaLinha() {
	botaoRemover.click(function (event) {
		event.preventDefault();

		let elementoBisavo = $(this).parent().parent().parent();
		elementoBisavo.fadeOut(600);
		setTimeout(function () {
			elementoBisavo.remove();
		}, 601);
	});
}

function InserePlacar() {
	let jogador = $("#nome-jogador").val();
	if (!jogador) jogador = "Jubileu"; //placeholder

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

	NovaLinha();
	placar.slideDown(600);
	ScrollPlacar();
}

function ScrollPlacar() {
	let posicaoPlacar = placar.offset().top;
	$("html").animate(
		{
			scrollTop: `${posicaoPlacar}px`,
		},
		1000
	);
}
