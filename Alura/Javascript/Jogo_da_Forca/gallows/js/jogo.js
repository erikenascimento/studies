var criaJogo = function () {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];

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
	};
};
