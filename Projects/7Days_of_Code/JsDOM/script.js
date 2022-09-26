const inputNome = document.querySelector("#nome");
const inputNascimento = document.querySelector("#nascimento");
const form = document.querySelector(".form");

// botaoSalvar.addEventListener("onsubmit", Enviar);

form.addEventListener("submit", function (evento) {
	console.log(inputNome.value, inputNascimento.value);

	evento.preventDefault();
});
