var criaController = function (jogo) {
	var $entrada = $(".entrada");
	var $lacunas = $(".lacunas");

	var exibeLacunas = function () {
		jogo.getLacunas().forEach(char => {
			$lacunas.append(`<li class="lacuna"></li>`);
		});
	};

	var mudaPlaceHolder = function () {
		$entrada.attr("placeholder", "Chute");
		$entrada.val("");
	};

	var guardaPalavraSecreta = function () {
		var palavraGuardada = $entrada.val();
	};

	var inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						jogo.setPalavraSecreta($entrada.val());
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
