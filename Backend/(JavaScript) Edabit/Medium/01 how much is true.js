//Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
	const filtered = arr.filter(isTrue => isTrue == true); //will create another array named filtered only with all the 'true' values on the array.
	return filtered.length;
}

console.log(countTrue([true, false, false, true, false]));

/*
Test Cases:

countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
*/