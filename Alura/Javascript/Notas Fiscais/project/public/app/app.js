import { timeoutPromise, delay, retry } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";
import { notasService } from "./nota/service.js";
import {
	takeUntil,
	debounceTime,
	partialize,
	pipe,
} from "./utils/operators.js";

const operations = pipe(
	partialize(takeUntil, 3),
	partialize(debounceTime, 500)
); //a ordem deve ser invertida mesmo usando pipe por causa de uma chamada de callback

const action = operations(() =>
	retry(3, 3000, () => timeoutPromise(200, notasService.sumItems("2143")))
		.then(console.log)
		.catch(console.log)
);

document.querySelector("#myButton").onclick = action;
