var criaController = function (jogo) {
	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");

	var exibeLacunas = function () {
		$lacunas.empty();
		jogo.getLacunas().forEach(char => {
			$lacunas.append(`<li class="lacuna"></li>`);
		});
	};

	var mudaPlaceHolder = function () {
		$entrada.attr("placeholder", "Chute");
	};

	var guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val());
		$entrada.val("");
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
