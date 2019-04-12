//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr=[1,3,5,7,9]. Our minimum sum is 1+2+5+7=16 and our maximum sum is 3+5+7+9=24. We would print

// 16 24

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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort()
    var output = [0 , 0]
    for (let i = 0; i < arr.length; i++) {
        if (i<arr.length-1) {
            output[0] += arr[i]; 
        }
        if (i>0) {
            output[1] += arr[i];
        }
    }
    console.log(output[0], output[1]);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
