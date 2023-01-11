let carboidratos = [];
let proteinas = [];
let gorduras = [];

let alimento = "";
let categoria = "";
let pergunta = "Sim";

while (pergunta == "Sim") {
	pergunta = prompt(
		"Digite 'Sim' caso você queira adicionar um alimento na sua lista de compras."
	);

	if (pergunta == "Sim") {
		alimento = prompt("Qual alimento você deseja inserir?");
		categoria = prompt(
			"Em qual categoria essa comida se encaixa? 'Carboidratos', 'Proteínas' ou 'Gorduras'?"
		);

		if (categoria == "Carboidratos") carboidratos.push(alimento);
		else if (categoria == "Proteinas" || categoria == "Proteínas")
			proteinas.push(alimento);
		else if (categoria == "Gorduras") gorduras.push(alimento);
	}
}

console.log(`Lista de compras:
    Carboidratos: ${carboidratos}
    Proteínas: ${proteinas}
    Gorduras: ${gorduras}`);
