/*This robot roams around a 2D grid. It starts at (0, 0) facing North.
After each time it moves, the robot rotates 90 degrees clockwise.
Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10). 

Each movement is an integer (whole number).*/

function trackRobot(...steps) {
    let position = [0, 0]; //the initial position of the robot
    const direction = ["North", "East", "South", "West"]; //to calculate direction of movement
    let i = 0; //counter to help reset the direction array inside the loop
    for (let j = 0; j < steps.length; j++) { //runs based on the length of the input
        if (direction[i] == direction[4]) { 
            i = 0; //to reset the direct array from "West" to "North"
        }
        //conditionals bellow to increment the value into the position
        if (direction[i] == "North") {
            position[1] += steps[j];
        }
        else if (direction[i] == "East") {
            position[0] += steps[j];
        }
        else if (direction[i] == "South") {
            position[1] -= steps[j];
        }
        else if (direction[i] == "West") {
            position[0] -= steps[j];
        }
        i++;
    }
    return position;
}

console.log(trackRobot(20, 30, 10, 40));

/*
Test Cases:

trackRobot(20, 30, 10, 40) ➞ [-10, 10]
trackRobot() ➞ [0, 0] (No movement means the robot stays at (0, 0).)
trackRobot(-10, 20, 10) ➞ [20, -20] (The amount to move can be negative.)
*/