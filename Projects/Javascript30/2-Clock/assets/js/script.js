const clockHands = document.querySelectorAll(".clock__hand");

let divider;

function yepClock() {
	const newDate = new Date();

	const actualTime = [
		newDate.getHours(),
		newDate.getMinutes(),
		newDate.getSeconds(),
	];

	clockHands.forEach((hand, index) => {
		index == 0 ? (divider = 12) : (divider = 60);

		rotateHand(hand, (actualTime[index] / divider) * 360 - 90);
	});
}

setInterval(yepClock, 1000);

function rotateHand(handToRotate, timeReference) {
	handToRotate.style.transform = `rotate(${timeReference}deg)`;
}
