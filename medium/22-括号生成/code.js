function generateParenthesis(n) {
    let res = []
    function dfs(left, right, str) {
        console.log(left,right,str)
        if (str.length === 2 * n) {
            res.push(str)
            return
        }
        if (left > 0) {
            dfs(left - 1, right, str + '(')
        }
        if (right > left) {
            dfs(left, right - 1, str + ')')
        }
    }
    dfs(n, n, '')
    return res
}
console.log(generateParenthesis(2))
 