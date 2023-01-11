const numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);

console.log(numeroSecreto);

let chute = prompt("Chute um número de 0 até 10");

for (let tentativas = 3; tentativas >= 0; tentativas--) {
	console.log("chute:", chute);
	if (chute == numeroSecreto) {
		alert("Parabéns você acertou");
		break;
	} else if (tentativas > 1) {
		chute = prompt(
			`Você errou, tente novamente. Tentativas restantes: ${tentativas - 1}`
		);
	} else if (tentativas == 1) {
		alert("Voce Perdeu!");
		break;
	}
}

location.reload();
