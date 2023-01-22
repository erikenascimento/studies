const criaJogo = sprite => {
	let _etapa = 1;
	let palavraSecreta = "";
	let _lacunas = [];

	const ganhou = () =>
		!_lacunas.length ? false : _lacunas.join("") == palavraSecreta;

	const perdeu = () => sprite.isFinished();

	const ganhouOuPerdeu = () => ganhou() || perdeu();

	const reinicia = () => {
		_etapa = 1;
		sprite.reset();
		_lacunas = [];
		palavraSecreta = "";
	};

	function estruturaLacuna(palavra) {
		[...palavra].forEach(char => _lacunas.push(""));
	}

	const processaChute = chute => {
		if (!chute.trim()) throw Error("Chute inválido");
		const regex = new RegExp(chute, "gi");
		let letraExiste = false;

		while ((letraExiste = regex.exec(palavraSecreta))) {
			_lacunas[letraExiste.index] = chute;
		}

		if (!palavraSecreta.includes(chute)) {
			sprite.nextFrame();
		}
	};

	const setPalavraSecreta = palavra => {
		if (!palavra.trim()) throw Error("Palavra inválida");
		palavraSecreta = palavra;
		estruturaLacuna(palavra);

		_etapa = 2;
	};

	const getLacunas = () => _lacunas;

	const getEtapa = () => _etapa;

	return {
		setPalavraSecreta,
		getLacunas,
		getEtapa,
		processaChute,
		ganhou,
		perdeu,
		ganhouOuPerdeu,
		reinicia,
	};
};
