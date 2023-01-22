var criaController = function (jogo) {
	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");

	var exibeLacunas = function () {
		$lacunas.empty();
		jogo.getLacunas().forEach(char => {
			$lacunas.append(`<li class="lacuna">${char}</li>`);
		});
		$entrada.val("");
	};

	var mudaPlaceHolder = function () {
		$entrada.attr("placeholder", "Chute");
	};

	var guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val());
	};

	var lerChute = function () {
		jogo.processaChute($entrada.val().trim().substr(0, 1));
	};

	var inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						guardaPalavraSecreta();
						exibeLacunas();
						mudaPlaceHolder();
						break;
					case 2:
						lerChute();
						exibeLacunas();
						break;
				}
			}
		});
	};

	return {
		inicia: inicia,
	};
};
