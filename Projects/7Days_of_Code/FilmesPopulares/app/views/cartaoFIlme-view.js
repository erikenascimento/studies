import { cartaoFilme_model } from "../models/cartaoFilme-model.js";

document.body.innerHTML += cartaoFilme_model(
	"cartaoFilme__cartaz--endgame",
	"Avengers Endgame (2019)",
	"9.2"
);

document.body.innerHTML += cartaoFilme_model(
	"cartaoFilme__cartaz--batman",
	"Batman (2022)",
	"9.4"
);

document.body.innerHTML += cartaoFilme_model(
	"cartaoFilme__cartaz--drStrange",
	"Doctor Strange in the Multiverse of Madness",
	"8.5"
);

document.body.innerHTML += cartaoFilme_model(
	"cartaoFilme__cartaz--avatar",
	"Avatar (2009)",
	"9.5"
);
