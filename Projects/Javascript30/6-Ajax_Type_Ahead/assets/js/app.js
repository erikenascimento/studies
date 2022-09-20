import { displayMatches } from "./displayMatches-view.js";

const searchInput = document.querySelector(".search__input");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
