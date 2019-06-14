// // Consider a staircase of size :
// #
// ##
// ###
// ####
// // Observe that its base and height are both equal to , and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// // Write a program that prints a staircase of size .

// // Function Description

// // Complete the staircase function in the editor below. It should print a staircase as described above.

// // staircase has the following parameter(s):
// // n: an integer


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    
    for (let i = 1; i <= n; i++) {
        let str = ""
        for (let j = 1; j <= i - n; j++) {
            str += " "
        }
        
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
