var criaController = function (jogo) {
	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");

	var exibeLacunas = function () {
		// codigo
	};

	var mudaPlaceHolder = function () {
		// codigo
	};

	var guardaPalavraSecreta = function () {
		// codigo
	};

	var inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						alert("etapa 1 - falta implementar");
						break;
					case 2:
						alert("etapa 2 - falta implementar");
						break;
				}
			}
		});
	};

	return {
		inicia: inicia,
	};
};
