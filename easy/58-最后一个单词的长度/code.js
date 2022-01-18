//解法1
let s=" hello world  "
function lengthOfLastWord(s){
    let index=s.length-1
    let wordLength =0
    while(s[index]===" "){
        index--
    }
    while(index>0&&s[index]!==" "){
        index--
        wordLength++
    }
    return wordLength

}
console.log(lengthOfLastWord(s))