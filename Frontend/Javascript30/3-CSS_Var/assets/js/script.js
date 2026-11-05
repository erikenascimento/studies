const sliders = document.querySelectorAll(".controls input");

function handleUpdate() {
	console.log(this);
	const suffix = this.dataset.sizing || "";
	document.documentElement.style.setProperty(
		`--${this.name}`,
		this.value + suffix
	);
}

listenForA("change");
//listenForA("mousemove"); //I'll remove this call so it won't trigger everytime

function listenForA(eventName) {
	sliders.forEach(input =>
		input.addEventListener(`${eventName}`, handleUpdate)
	);
}
