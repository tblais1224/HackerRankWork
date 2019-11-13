
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let removed = 0
    let aArr = a.split('')
    let bArr = b.split('')
    for (let i = 0; i < a.length; i++) {
        if (bArr.includes(a[i])) {
            bArr.splice(bArr.indexOf(a[i]),1)
            aArr.splice(aArr.indexOf(a[i]),1)
        }else{
            removed++;
        }
    }
    for (let i = 0; i < bArr.length; i++) {
        if (aArr.includes(bArr[i])) {
            aArr.splice(aArr.indexOf(bArr[i]),1)
        }else{
            removed++;
        }
    }
    return removed
}

function main() {
    const a = "bugexikjevtubidpulaelsbcqlupwetzyzdvjphn";

    const b = "lajoipfecfinxjspxmevqxuqyalhrsxcvgsdxxkacspbchrbvvwnvsdtsrdk";

    // 30 = result
    console.log(makeAnagram(a, b)) ;
}
main()