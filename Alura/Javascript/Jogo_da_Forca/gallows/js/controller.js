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

	var mudaPlaceHolder = function (texto) {
		$entrada.attr("placeholder", texto);
	};

	var guardaPalavraSecreta = function () {
		jogo.setPalavraSecreta($entrada.val());
	};

	var lerChute = function () {
		jogo.processaChute($entrada.val().trim().substr(0, 1));

		if (jogo.ganhouOuPerdeu()) {
			setTimeout(() => {
				if (jogo.ganhou()) {
					alert("Você ganhou!");
				} else if (jogo.perdeu()) {
					alert("Voce perdeu!");
				}

				jogo.reinicia();
				$lacunas.emtpy();
				mudaPlaceHolder("Palavra secreta");
			}, 200);
		}
	};

	var inicia = function () {
		$entrada.keypress(function (event) {
			if (event.which == 13) {
				switch (jogo.getEtapa()) {
					case 1:
						guardaPalavraSecreta();
						exibeLacunas();
						mudaPlaceHolder("Chute");
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
