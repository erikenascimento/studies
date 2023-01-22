var criaJogo = function (sprite) {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];

	var processaChute = function (chute) {
		// preencher as lacunas se o chute estiver correto
		// se errar, avançar o frame do sprite
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
	};
};
