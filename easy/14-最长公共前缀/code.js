const strs = ["flower", "flow", "flight"]
function longestCommonPrefix(strs) {
    let res = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0
        while (j < res.length && j < strs[i].length) {
            if (res[j] !== strs[i][j])
                break
            j++
        }
        res = res.substr(0, j)
    }
    return res
}
console.log(longestCommonPrefix(strs))