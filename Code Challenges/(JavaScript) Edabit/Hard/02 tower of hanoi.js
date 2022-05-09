/* 
There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.

Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game. 

Notes
The amount of discs is always a positive integer.
1 disc can be changed per move.
*/

function towerHanoi(discs) {
	return Math.pow(2, discs)-1;
    /* since we only need to pass the number of disks to the function
    we could simply adapt the algorith (2^n)-1 to js. */
}

console.log(towerHanoi(3));

/*
Test Cases:
towerHanoi(3) ➞ 7
towerHanoi(5) ➞ 31
towerHanoi(0) ➞ 0
*/