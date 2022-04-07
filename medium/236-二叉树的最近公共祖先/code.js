function isSymmetric(root) {
    return dfs(root.left, root.right)
}
function dfs(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    if (left.val !== right.val) return false
    return dfs(left.left, right.right) && dfs(left.right, right.left)
}