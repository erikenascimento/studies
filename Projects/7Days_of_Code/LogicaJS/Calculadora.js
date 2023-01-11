function Soma(x, y) {
	console.log(x + y);
}

function Subtracao(x, y) {
	console.log(x - y);
}

function Multiplicacao(x, y) {
	console.log(x * y);
}

function Divisao(x, y) {
	console.log(x / y);
}

function Sair() {
	alert("Até a próxima");
}

let escolha = prompt(
	"Escolha uma operação entre: 'Soma', 'Subtração', 'Multiplicação', 'Divisão' ou digite 'Sair' para sair."
);

if (escolha == "Sair") Sair();
else if (escolha != "Sair") {
	let numeroX = parseInt(prompt("Escolha um número x."));
	let numeroY = parseInt(prompt("Escolha um número y."));

	if (escolha == "Soma") {
		Soma(numeroX, numeroY);
	} else if (escolha == "Subtração") {
		Subtracao(numeroX, numeroY);
	} else if (escolha == "Multiplicação") {
		Multiplicacao(numeroX, numeroY);
	} else if (escolha == "Divisão") {
		Divisao(numeroX, numeroY);
	}
}
