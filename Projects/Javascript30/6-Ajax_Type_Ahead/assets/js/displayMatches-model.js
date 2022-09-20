export function matchesModel(place, cityName, stateName) {
	return `
<li>
  <span class="name">${cityName}, ${stateName}</span>
  <span class="population">${numberWithCommas(place.population)}</span>
</li>
`;
}

export const spanModel = inputValue => `<span class="hl">${inputValue}</span>`;

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
