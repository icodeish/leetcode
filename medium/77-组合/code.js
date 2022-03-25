const n = 4
const k = 2
function combine(n, k) {
    let res = []
    let path = []
    function backtrack(n, k, index) {
        if (path.length === k) {
            return res.push(path.concat())
        }
        for (let i = index; i <= n; i++) {
            path.push(i)
            backtrack(n, k, i + 1)
            path.pop()
        }

    }
    backtrack(n, k, 1)
    return res
}
console.log(combine(4, 2))