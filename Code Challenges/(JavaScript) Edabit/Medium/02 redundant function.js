// Write a function redundant that takes in a string str and returns a function that returns str.

function redundant(str) {
	return function closure() {
		return str;
	}
}

const f1 = redundant("apple");
console.log(f1);

/*
Test Cases:
const f1 = redundant("apple")  f1() ➞ "apple"
const f2 = redundant("pear")  f2() ➞ "pear"
const f3 = redundant("")  f3() ➞ ""

Notes:
Your function should return a function, not a string.
*/