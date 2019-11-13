
// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let count = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i-1]) count++;
    }
    return count
}

function main() {

    const q = ['AAAA',"BBBBB","ABABABAB","BABABA","AAABBB"];

    for (let i = 0; i < q.length; i++) {
        const s = q[i];

        let result = alternatingCharacters(s);

        console.log(result);
    }
}
