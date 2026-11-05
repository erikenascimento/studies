const area = prompt(
	"Você quer seguir para área de 'Front-end' ou de 'Back-end'?"
);

if (area == "Front-end") {
	const framework = prompt("Você quer aprender 'React' ou 'Angular'?");
} else if (area == "Back-end") {
	const linguagem = prompt("Você quer aprender 'Java' ou 'Node'?");
} else {
	alert("Você não inseriu um área válida.");
}

const especializacao = prompt(
	"Você quer continuar a se 'Especializar' ou tornar-se 'Full-stack'?"
);

if (especializacao == "Especializar") {
	alert(`Você escolheu continuar se especializando em ${area}`);
} else if (especializacao == "Full-stack") {
	alert("Você escolheu se tornar Full-stack");
} else {
	alert("Você não inseriu uma resposta válida.");
}

const pergunta =
	"Digite 'Sim' caso haja alguma outra tecnologia que você queira se especializar";
let seSim = prompt(pergunta);

while (seSim == "Sim") {
	let tecnologia = prompt("Qual tecnologia você deseja se especializar?");

	alert(`Você deseja se especializar em ${tecnologia}`);

	seSim = prompt(pergunta);
}

alert("Continue seus estudos, atualize a página se quiser jogar de novo");
