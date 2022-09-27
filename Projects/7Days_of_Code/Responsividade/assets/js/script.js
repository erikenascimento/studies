const rodapeBotaoLocal = document.querySelector("#rodapeBotao--local");
const rodapeBotaoRemota = document.querySelector("#rodapeBotao--remota");
const rodapeBotaoNova = document.querySelector("#rodapeBotao--nova");
const overlay = document.querySelector("#overlay");

rodapeBotaoNova.addEventListener("click", function () {
	overlay.classList.toggle("fundoInativo");
	rodapeBotaoLocal.classList.toggle("botaoEscondido");
	rodapeBotaoRemota.classList.toggle("botaoEscondido");
});
