let root = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }


}
function zigzagLevelOrder(root) {
    let res = []
    function recursion(node, depth) {
        if (!node) return
        if (!res[depth]) res[depth] = []
        if (depth % 2) {
            res[depth].unshift(node.val)
        } else {
            res[depth].push(node.val)
        }

        recursion(node.left, depth + 1)
        recursion(node.right, depth + 1)
    }
    recursion(root, 0)
    return res
}
console.log(zigzagLevelOrder(root))