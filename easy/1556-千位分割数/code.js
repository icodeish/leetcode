const n = 0
function thousandSeparator(n) {
    if (n === 0) return '0'
    let res = []
    n = n.toString().split('').reverse().join('')
    for (let i = 0; i < n.length; i++) {
        res.push(n[i])
        if ((i + 1) % 3 === 0) res.push('.')
    }
    return n.length % 3 === 0 ? res.reverse().join().replace(/,/g, "").substring(1) : res.reverse().join().replace(/,/g, "")
}
console.log(thousandSeparator(n))