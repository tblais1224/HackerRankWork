
// Complete the circularArrayRotation function below.
function circularArrayRotation(array, rotationNum, queries) {
    for (let i = 0; i < rotationNum; i++) {
        array.unshift(array.pop())
    }
    return queries.map( q => array[q])
}

function main() {
    const k = 2
    const a = [1,2,3]
    let queries = [0,1,2];

    const result = circularArrayRotation(a, k, queries);

    result.forEach(element => {
        console.log(element)
    });
}
