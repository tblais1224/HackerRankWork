"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the diagonalDifference function below.

var arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
function diagonalDifference(arr) {
  var n = arr.length;
  var sumDiagOne = 0;
  var sumDiagTwo = 0;
  for (let i = 0; i < n; i++) {
    sumDiagOne += arr[i][i];
    for (let j = n - 1; j >= 0; j--) {
      if ((i + j) == (n-1)) {
        sumDiagTwo += arr[i][j];
        console.log(sumDiagTwo);
      }
    }
  }

  //   console.log(sumDiagOne, sumDiagTwo, n)
  var absDiff = sumDiagOne - sumDiagTwo;
  if (absDiff < 0) {
    return absDiff * -1;
  } else {
    return absDiff;
  }
};

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let arr = Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  const result = diagonalDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
