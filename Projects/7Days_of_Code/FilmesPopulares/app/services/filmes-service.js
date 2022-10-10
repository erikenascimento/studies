import { tmdbAPIkey } from "../tmdbAPIkey.js";

// fetch(`https://api.themoviedb.org/3/movie/550?api_key=${tmdbAPIkey}`)
// 	.then(resposta => resposta.json())
// 	.then(data => console.log("data", data));

export async function APIfetch() {
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbAPIkey}&language=en-US&page=1`;
	const fetchResponse = await fetch(url);
	const { results } = await fetchResponse.json();
	console.log("~ results", results[0].title);
	return results[0].title.json;
}

const teste = APIfetch();
console.log("~ teste", teste);
