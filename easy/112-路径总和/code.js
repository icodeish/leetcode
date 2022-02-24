//解法1

const BinaryTree={
    val:5,
    left:{
        val:4,
        left:{
            val:11,
            left:{
                val:7,
                left:null,
                right:null
            },
            right:{
                val:2,
                left:null,
                right:null
            }
        },
        right:null
    },
    right:{
        val:8,
        left:{
            val:13,
            left:null,
            right:null,

        },
        right:{
            val:4,
            left:null,
            right:{
                val:1,
                left:null,
                right:null
            }

        }
    }

}
function hasPathSum(root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) return targetSum === root.val
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}
console.log(hasPathSum(BinaryTree,22))