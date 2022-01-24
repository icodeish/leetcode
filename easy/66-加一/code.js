//解法1
var digits=[9,9,9,9,9,9,9]

var plusOne = function(digits) {
    for(let i=digits.length-1;0<=i;i--){
        if(digits[i]!==9){
            digits[i]++
            return digits
        }else{
            digits[i]=0
        }

    }
    digits.unshift(1)
    return digits
};
console.log(plusOne(digits))