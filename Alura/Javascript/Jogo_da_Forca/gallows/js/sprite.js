function createSprite(seletorCSS) {
	const sprite = {
		seletor: $(seletorCSS),
		numeroFrame: 1,
		mudaFrame: modificador =>
			sprite.seletor.toggleClass(`frame${sprite.numeroFrame - modificador}`),
		nextFrame: () => {
			sprite.numeroFrame++;
			if (sprite.numeroFrame <= 9) {
				if (sprite.numeroFrame > 1) {
					sprite.mudaFrame(1);
				}
				sprite.mudaFrame(0);
			}
		},
		isFinished: () => {
			if (sprite.numeroFrame >= 9) {
				return true;
			} else {
				return false;
			}
		},
		reset: () => {
			sprite.mudaFrame(0);
			sprite.numeroFrame = 1;
		},
	};

	return sprite;
}
