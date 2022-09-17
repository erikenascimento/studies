import { log } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";
import { notasService } from "./nota/service.js";
import { takeUntil } from "./utils/operators.js";

const operation = takeUntil(3, () =>
	notasService.sumItems("2143").then(console.log).catch(console.log)
);

document.querySelector("#myButton").onclick = operation();
