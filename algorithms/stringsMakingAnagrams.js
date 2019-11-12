
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let newA = a.split('').filter(char => b.includes(char)).join('')
    let newB = b.split('').filter(char => a.includes(char)).join('')
    let removed = (a.length - newA.length) + (b.length - newB.length)

    for (let i = 0; i < newA.length; i++) {
        
    }
    console.log(newA, newB)
    return removed
}

function main() {
    const a = "tttttttttttttttttttttttttttttttttttttsssssssssssssssss";

    const b = "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss";

    // 30 = result
    console.log(makeAnagram(a, b)) ;
}
main()