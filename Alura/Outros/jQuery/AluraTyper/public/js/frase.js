let botaoFrase = $("#botao-frase");

botaoFrase.click(PegaFrase);

function PegaFrase() {
	$.get("http://localhost:3000/frases", FraseAleatoria);
}

function FraseAleatoria(data) {
	$(".frase").text(data[Math.floor(Math.random() * data.length)].texto);
}
