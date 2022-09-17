import { log } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";
import { notasService } from "./nota/service.js";
import { takeUntil, debounceTime } from "./utils/operators.js";

const operationLimiter = takeUntil(3, () =>
	notasService.sumItems("2143").then(console.log).catch(console.log)
);

const operationTimeout = debounceTime(500, operationLimiter)

document.querySelector("#myButton").onclick = operationTimeout;
