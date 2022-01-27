//解法1  堆栈溢出了
// var myPow = function(x, n) {
//     if(n===0) return 1
//     if(n===1) return x
//     if(n>0) return  x * myPow(x,n-1)
//     return 1/(x * myPow(x,-n-1))
    
// };

// console.log(myPow(2,-3)) 



//解法2
var myPow = function(x, n) {
    if(n<0) return 1/myPow(x,-n)
    if(n===0) return 1
    if(n%2) return x * myPow(x,n-1)
    return myPow(x * x,n/2)
};
console.log(myPow(2,2)) 