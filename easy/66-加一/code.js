//解法1
var digits=[9,9,9]

var plusOne = function(digits) {
 if(digits[digits.length-1]===9){
    let num =parseInt(digits.toString().split(",").join(""))+1
    digits= num.toString().split("")
    return digits
 }else{
     var lastIndex=parseInt(digits[digits.length-1])+1
     digits[digits.length-1]=lastIndex
     return digits
 }

    
};
console.log(plusOne(digits))