function isBalanced(root) {
    let flag = true
    const maxDepth = function (root) {
        if (root === null) return 0
        if (!flag) return
        let leftMaxDepth = maxDepth(root.left)
        let rightMaxDepth = maxDepth(root.right)
        if (Math.abs(leftMaxDepth - rightMaxDepth) > 1) {
            flag = false
        }
        return 1 + Math.max(leftMaxDepth, rightMaxDepth)
    }
    maxDepth(root)
    return flag
}