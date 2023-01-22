var criaJogo = function (sprite) {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];

	var ganhou = function () {
		// para implementar
	};

	var perdeu = function () {
		// para implementar
	};

	var ganhouOuPerdeu = function () {
		// para implementar
	};

	var reinicia = function () {
		// para implementar
	};

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
		[...palavra].forEach(c => _lacunas.push(""));

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
		ganhou: ganhouOuPerdeu,
		reinicia: reinicia,
	};
};
