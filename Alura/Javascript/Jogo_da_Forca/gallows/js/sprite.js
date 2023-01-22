function createSprite(seletorCSS) {
	var sprite = {
		seletor: $(seletorCSS),
		numeroFrame: 1,
		nextFrame: function () {
			if (sprite.numeroFrame <= 9) {
				if (sprite.numeroFrame > 1) {
					sprite.seletor.toggleClass(`frame${sprite.numeroFrame - 1}`); //remove classe anterior
				}

				sprite.seletor.toggleClass(`frame${sprite.numeroFrame}`); //adiciona classe atual
				sprite.numeroFrame++;
			}
		},
	};

	return sprite;
}
