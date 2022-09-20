import { findMatches } from "./findMatches-service.js";
import { cities } from "./cities-service.js";
import { matchesModel, spanModel } from "./displayMatches-model.js";

const searchSuggestions = document.querySelector(".search__suggestions");

export function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	const html = matchArray
		.map(place => {
			const regex = new RegExp(this.value, "gi");
			const cityName = place.city.replace(regex, spanModel(this.value));
			const stateName = place.state.replace(regex, spanModel(this.value));
			return matchesModel(place, cityName, stateName);
		})
		.join("");
	searchSuggestions.innerHTML = html;
}
