//解法1
// function climbStairs(n){
//     if (n == 1) return 1
//     if (n == 2) return 2
//     let a = 1, b = 2, i = 3
//     while (i++ <= n) {
//         b += a
//         a = b - a
//     }
//     return b
// }
//解法2
let obj = {}
function climbStairs() {
    if (n === 1) return 1
    if (n === 2) return 2
    if (obj[n]) return obj[n]
    obj[n] = climbStairs(n - 1) + climbStairs(n - 2)
    return obj[n]
}
//剑指 Offer 10- II. 青蛙跳台阶问题

// var numWays = function (n) {
//     if (n === 0) return 1
//     if (n === 1) return 1
//     if (n === 2) return 2
//     if (obj[n]) return obj[n]
//     obj[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007
//     return obj[n]
// }