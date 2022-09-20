const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle("open");
}

function toggleActive(event) {
	if (event.propertyName.includes("flex")) this.classList.toggle("open-active");
}

addEvent("click", toggleOpen);
addEvent("transitionend", toggleActive);

function addEvent(eventName, eventFunction) {
	panels.forEach(panel =>
		panel.addEventListener(`${eventName}`, eventFunction)
	);
}
