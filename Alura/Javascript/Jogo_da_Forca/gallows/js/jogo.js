var criaJogo = function (sprite) {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];

	var ganhou = function () {
		return !_lacunas.length ? false : _lacunas.join("") == palavraSecreta;
	};

	var perdeu = function () {
		return sprite.isFinished();
	};

	var ganhouOuPerdeu = function () {
		return ganhou() || perdeu();
	};

	var reinicia = function () {
		_etapa = 1;
		sprite.reset();
		_lacunas = [];
		palavraSecreta = "";
	};

	function estruturaLacuna(palavra) {
		[...palavra].forEach(char => _lacunas.push(""));
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

		_etapa = 2;
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
