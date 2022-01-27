//递归解法
console
var isPowerOfTwo = function(n) {
    if(n===1) return true
    if(n===0) return false
    if(n%2===0) return isPowerOfTwo(n/2)
    return false
};
console.log(isPowerOfTwo(0))