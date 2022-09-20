//selectors
const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
//defining canvas area
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//defining stroke styles
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 1;
//flag for mousedown
let isDrawing = false;
//stroke position
let lastX = 0;
let lastY = 0;
//start value of the rainbow
let hue = 0;
//to make come and go effect
let direction = true;

function draw(event) {
	if (!isDrawing) return;
	//change the stroke color
	context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	//start drawing
	context.beginPath(); //begin drawing
	context.moveTo(lastX, lastY); //from
	context.lineTo(event.offsetX, event.offsetY); //to
	context.stroke(); //finish drawing
	[lastX, lastY] = [event.offsetX, event.offsetY]; //cursor position
	//increment for the rainbow effect
	hue++;
	if (hue >= 360) hue = 0; //make a loop
	//stabilishes a lineWidth range for the transform effect
	if (context.lineWidth >= 60 || context.lineWidth <= 1) direction = !direction;
	//increases or decreases the width based on the direction flag
	direction ? context.lineWidth++ : context.lineWidth--;
}

//listeners
canvas.addEventListener("mousedown", event => {
	isDrawing = true;
	[lastX, lastY] = [event.offsetX, event.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
