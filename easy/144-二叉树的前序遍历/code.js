let root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}
function inorderTraversal(root) {
    let res = []
    inorder(root)
    function inorder(root) {
        if (!root) return
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    return res
}
console.log(preorderTraversal(root))