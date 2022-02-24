let s = "babad"
function longestPalindrome(s) {
    //创建一个二维数组, 用dp[i][j]的结果保存是否是回文串
    let dp = Array.from({ length: s.length }).map((item_i, index_i) => {
        return Array.from({ length: s.length }).map((item_j, index_j) => {
            return index_i === index_j || null
        })
    })
    //遍历所有能形成的回文串 
    for (let j = 0; j < s.length; j++) {
        for (let i = 0; i < s.length; i++) {
            if (j - i === 1) dp[i][j] = s[i] === s[j]
            if (j - i >= 2) dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j] || false  //当前回文串的子串肯定是已经有结果了 
        }
    }
    let len = 1
    let res = dp.reduce((arr, itemArr, index) => {

        for (let [item__index, item] of itemArr.entries()) {
            if (item) {
                arr.push(s.slice(index, item__index + 1))
                // console.log(s.slice(index, item__index + 1).length)
                len = Math.max(len, s.slice(index, item__index + 1).length)
            }
        }

        return arr
    }, [])
    for (let i = 0; i < res.length; i++) {
        if (res[i].length === len) res = res[i]
    }
    return res
}
console.log(longestPalindrome(s))
