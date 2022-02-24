let s = "abcd"
function countSubstrings(s) {
    let dp = Array.from({ length: s.length }).map((item_i, index_i) => {
        return Array.from({ length: s.length }).map((item_j, index_j) => {
            return index_i === index_j || null
        })
    })
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < s.length; i++) {
            if (j - i === 1) dp[i][j] = s[i] === s[j]
            if (j - i >= 2) dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j] || false
        }
    }
    let res = dp.reduce((count, itemArr, index) => {
        for (let [item__index, item] of itemArr.entries()) {
            if (item) {
                count.push(s.slice(index, item__index + 1))
            }
        }
        return count
    }, [])
    return res.length
}


console.log(countSubstrings(s))


