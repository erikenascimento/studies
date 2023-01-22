function createSprite(seletorCSS) {
	var sprite = {
		seletor: $(seletorCSS),
		numeroFrame: 1,
		mudaFrame: function (modificador) {
			sprite.seletor.toggleClass(`frame${sprite.numeroFrame - modificador}`);
		},
		nextFrame: function () {
			sprite.numeroFrame++;
			if (sprite.numeroFrame <= 9) {
				if (sprite.numeroFrame > 1) {
					sprite.mudaFrame(1);
				}
				sprite.mudaFrame(0);
			}
		},
		isFinished: function () {
			if (sprite.numeroFrame >= 9) {
				return true;
			} else {
				return false;
			}
		},
		reset: function () {
			sprite.mudaFrame(0);
			sprite.numeroFrame = 1;
		},
	};

	return sprite;
}
