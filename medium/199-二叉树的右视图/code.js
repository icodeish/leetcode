
let root = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
}

function rightSideView(root) {
    let res = []
    function dfs(root, depth) {
        if (!root) return null
        if (depth === res.length) res.push(root.val)
        depth++
        dfs(root.right, depth)
        dfs(root.left, depth)
    }
    dfs(root, 0)
    return res
}
console.log(rightSideView(root))