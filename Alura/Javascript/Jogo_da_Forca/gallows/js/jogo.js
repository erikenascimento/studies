var criaJogo = function (sprite) {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];

	var ganhou = function () {
		return _lacunas.join("") == palavraSecreta;
	};

	var perdeu = function () {
		return sprite.isFinished();
	};

	var ganhouOuPerdeu = function () {
		return ganhou() || perdeu();
	};

	var reinicia = function () {
		sprite.reset();
		_lacunas = [];
		estruturaLacuna(palavraSecreta);
	};

	function estruturaLacuna(palavra) {
		[...palavra].forEach(c => _lacunas.push(""));
	}

	var processaChute = function (chute) {
		var regex = new RegExp(chute, "gi");
		var letraExiste = false;

		while ((letraExiste = regex.exec(palavraSecreta))) {
			_lacunas[letraExiste.index] = chute;
		}

		if (!palavraSecreta.includes(chute)) {
			sprite.nextFrame();
		}
	};

	var setPalavraSecreta = function (palavra) {
		palavraSecreta = palavra;
		estruturaLacuna(palavra);

		_etapa++;
	};

	var getLacunas = function () {
		return _lacunas;
	};

	var getEtapa = function () {
		return _etapa;
	};

	return {
		setPalavraSecreta: setPalavraSecreta,
		getLacunas: getLacunas,
		getEtapa: getEtapa,
		processaChute: processaChute,
		ganhou: ganhou,
		perdeu: perdeu,
		ganhouOuPerdeu: ganhouOuPerdeu,
		reinicia: reinicia,
	};
};
