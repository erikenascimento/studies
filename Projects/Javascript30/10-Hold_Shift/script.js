const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const firstBox = checkboxes[0];

let lastChecked = firstBox;

function handleCheck(event) {
	let inBetween = false;

	if (event.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;

			if (inBetween) checkbox.checked = true;
		});
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

//add unckeck functionallity
//fix the last checked variable to default to the first box properly
