//解法1
function isValid(s) {
    let stack = [],
        map = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
    for (let x of s) {
        if (x in map) {
            stack.push(x)
            continue
        }
        if (map[stack.pop()] !== x) return false
    }
    return !stack.length
}