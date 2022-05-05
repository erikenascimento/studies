// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function myFunction(a, n) {
    return a[--n]; //while strings are zero-indexed in js, the input in the test cases are one-indexed. Therefore it is necessary to decrement the variable by 1 before referencing it.
}

console.log(myFunction('abcd', 1));

/*
Test Cases:

myFunction('abcd',1) Expected: 'a'
myFunction('zyxbwpl',5) Expected: 'w'
myFunction('gfedcba',3) Expected: 'e'
*/