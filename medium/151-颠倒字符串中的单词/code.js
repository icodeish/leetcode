const s = " hello world "
function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ')
}
console.log(reverseWords(s))