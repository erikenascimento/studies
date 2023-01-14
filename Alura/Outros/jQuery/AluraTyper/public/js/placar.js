function NovaLinha() {
	$("#botao-remover").click(function (event) {
		event.preventDefault();
		$(this).parent().parent().parent().remove();
	});
}

function InserePlacar() {
	let corpoTabela = $("#corpo-tabela");

	let jogador = $("#nome-jogador").val();
	if (!jogador) jogador = "Jubileu";

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
}
