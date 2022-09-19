//It will listen to the keydown event and then will call a function
window.addEventListener("keydown", event => {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

	if (!audio) return; //stop the function when no audio was found for that key.
	audio.currentTime = 0; // will enable the audio to be spammed
	audio.play();
	key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition(event) {
	if (event.propertyName !== "transform") return;
	this.classList.remove("playing");
}
