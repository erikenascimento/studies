const inputCheck = document.querySelector("#darkMode");
const bodyTag = document.querySelector("body");

inputCheck.addEventListener("click", () => {
	const mode = inputCheck.checked ? "dark" : "light";
	bodyTag.setAttribute("data-bs-theme", mode);
});
