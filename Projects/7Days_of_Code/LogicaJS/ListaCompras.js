let carboidratos = [];
let proteinas = [];
let gorduras = [];

let alimento = "";
let categoria = "";
let pergunta = "";
let remove = "";

let repete = true;

function imprimirLista() {
	return console.log(`Lista de compras:
        Carboidratos: ${carboidratos}
        Proteínas: ${proteinas}
        Gorduras: ${gorduras}`);
}

while (repete) {
	pergunta = prompt(
		"Digite 'Sim' caso você queira adicionar um alimento na sua lista de compras. Digite 'Não' se quiser ver a lista. Digite qualquer outra coisa para sair."
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
	} else if (pergunta == "Não") {
		imprimirLista();

		remove = prompt("Qual alimento deseja remover?");

		if (carboidratos.includes(remove)) {
			carboidratos.splice(carboidratos.indexOf(remove), 1);
			alert(`${remove} foi removido.`);
		} else if (proteinas.includes(remove)) {
			proteinas.splice(proteinas.indexOf(remove), 1);
			alert(`${remove} foi removido.`);
		} else if (gorduras.includes(remove)) {
			gorduras.splice(gorduras.indexOf(remove), 1);
			alert(`${remove} foi removido.`);
		} else alert("Não foi possível encontrar o item dentro da lista");
	} else repete = false;
}

imprimirLista();
