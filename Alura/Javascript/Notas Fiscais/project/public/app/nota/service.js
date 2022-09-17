import { handleStatus } from "../utils/promise-helpers.js";
import { partialize, pipe } from "../utils/operators.js";

const API = "http://localhost:3000/notas"; //variável encapsulada pelo ES6

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) =>
	items.filter(item => item.codigo == code);
const sumItemsValue = items =>
	items.reduce((total, item) => total + item.valor, 0);

export const notasService = {
	listAll() {
		return fetch(API)
			.then(handleStatus)
			.catch(erro => {
				console.log(erro);
				return Promise.reject("Não foi possível obter as notas fiscais");
			});
	},

	sumItems(code) {
		const filterItems = partialize(filterItemsByCode, code);
		const sumItems = pipe(getItemsFromNotas, filterItems, sumItemsValue);

		return this.listAll().then(sumItems);
	},
};
