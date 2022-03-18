const n = 5, m = 3
// 0 1  3 4 
// 3
function lastRemaining(n, m) {
    let res = 0
    for (let i = 2; i <= n; i++)
        res = (res + m) % i
    return res
}   
