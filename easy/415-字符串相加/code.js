//解法1
let num1 = "0"
let num2 = "9"
function addStrings(num1, num2) {
    let carry=0 //初始进位0
    let res=[] //保存对应位数相加后的值
    let i=num1.length-1
    let j=num2.length-1
    while(i>=0||j>=0||carry){
        let cur=(num1[i]?parseInt(num1[i]):0)+(num2[j]?parseInt(num2[j]):0)+carry
        res.unshift(cur%10)
        carry=parseInt(cur/10)
        i--
        j--
    }
    return res.join("")
}
console.log(addStrings(num1,num2))