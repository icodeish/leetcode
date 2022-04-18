let x = 321
function reverse(x) {
    let res = parseInt(x.toString().split('').reverse().join(''))
    if (x < 0) res = -res
    return res < Math.pow(-2, 31) || res > (Math.pow(2, 31) - 1) ? 0 : res
}
console.log(reverse(x))