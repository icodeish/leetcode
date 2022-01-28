//解法1
var isPowerOfThree = function(n) {
    if(n===1) return true
    if(n===0) return false
    return isPowerOfThree(n/3)

};
console.log(isPowerOfThree(5))