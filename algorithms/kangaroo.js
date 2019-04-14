// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate v2 of meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo 1 starts at x1=2 with a jump distance v1=1 and kangaroo 2 starts at x2=1 with a jump distance of v2 =2. After one jump, they are both at x=3, (x1+v1 = 2 + 1, x2 + v2 = 1 + 2 ), so our answer is YES.


'use strict';

const fs = require('fs');

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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if (x1 > x2 && v1 > v2 || x2 > x1 && v2 > v1 || v1 == v2) {
        return ('NO')
    }\

    

    if (x1 < x2) {
        do {
            x1 += v1;
            x2 += v2;
        } while (x1 < x2);
        console.log(x1, x2, 'first');
        if (x1 == x2) {
            return ('YES');
        } else {
            return ('NO')
        }

    } else {
        if (x2 < x1) {
            do {
                x1 += v1;
                x2 += v2;
            } while (x2 < x1);
            console.log(x1, x2, 'second');
            if (x1 == x2) {
                return ('YES');
            } else {
                return ('NO')
            }
        }
    }
}
// if (x1 > x2) {
//     do {
//         v1 += v2;
//         x1 +=x2;
//     } while (x1 > x2);
//     if (x1 == x2) {
//         return ('YES');
//     } else {
//         return ('NO');
//     }
// } else if(x2 > x1) {
//     do {
//         v1 += v2;
//         x1 += x2;
//     } while (x2 > x1);
//     if (x2 == x1) {
//         return ('YES');
//     } else {
//         return ('NO');
//     };
// }


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}