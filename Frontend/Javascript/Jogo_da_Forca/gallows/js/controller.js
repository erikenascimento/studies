const criaController = jogo => {
	const $entrada = $(".entrada");
	const $lacunas = $(".lacunas");

	const exibeLacunas = () => {
		$lacunas.empty();
		jogo.getLacunas().forEach(char => {
			$lacunas.append(`<li class="lacuna">${char}</li>`);
		});
		$entrada.val("");
	};

	const mudaPlaceHolder = texto => $entrada.attr("placeholder", texto);

	const guardaPalavraSecreta = () => {
		try {
			jogo.setPalavraSecreta($entrada.val());
		} catch (error) {
			alert(error.message);
		}
	};

	const lerChute = () => {
		try {
			jogo.processaChute($entrada.val().trim().substr(0, 1));

			if (jogo.ganhouOuPerdeu()) {
				setTimeout(() => {
					if (jogo.ganhou()) {
						alert("Você ganhou!");
					} else if (jogo.perdeu()) {
						alert("Voce perdeu!");
					}

					jogo.reinicia();
					$lacunas.empty();
					mudaPlaceHolder("Palavra secreta");
				}, 200);
			}
		} catch (error) {
			alert(error.message);
		}
	};

	const inicia = () => {
		$entrada.keypress(event => {
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

	return { inicia };
};
