function TreeNode(val, left, right) {
    this.val = (val === undefined ? null : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
// let root = new TreeNode(4, 2, 7)
// root.left=new TreeNode(root.left,3,1)
// root.right=new TreeNode(root.right,6,9)
let root = {
    val: 4,
    left: {
        val: 2,
        left: {
            val: 1,
            left: null,
            right: null
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 7,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 9,
            left: null,
            right: null
        }
    }
}

console.log(root)
function invertTree(root) {
    if (root === null) return null
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}
console.log(invertTree(root))