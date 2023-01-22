var criaJogo = function (sprite) {
	var _etapa = 1;
	var palavraSecreta = "";
	var _lacunas = [];
	var $sprite = $(sprite);

	var numeroFrame = 1;
	var mudaFrame = function (modificador) {
		$sprite.toggleClass(`frame${numeroFrame - modificador}`);
	};
	var nextFrame = function () {
		numeroFrame++;
		if (numeroFrame <= 9) {
			if (numeroFrame > 1) {
				mudaFrame(1);
			}
			mudaFrame(0);
		}
	};

	var processaChute = function (chute) {
		if (palavraSecreta.includes(chute)) {
			for (let index = 0; index < palavraSecreta.length; index++) {
				if (palavraSecreta[index] == chute) {
					_lacunas[index] = chute;
				}
			}
		} else if (!palavraSecreta.includes(chute)) {
			nextFrame();
		} else console.log("erro, else");
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
