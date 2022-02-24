//解法1
const BinaryTree = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: {
                val: 7,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: null
    },
    right: {
        val: 8,
        left: {
            val: 13,
            left: null,
            right: null,

        },
        right: {
            val: 4,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }

        }
    }

}


// let queue=[]
// queue.push(BinaryTree)
// console.log(queue)
// console.log(queue.length)
// queue.shift()
// console.log(queue)
function levelOrder(root) {
    const res = []
    if (!root) return res
    const queue = []
    queue.push(root)
    console.log(`树的长度为`+queue.length)
    while (queue.length > 0) {
        console.log("***************")
        const curr_Levev_Len = queue.length
        console.log(curr_Levev_Len)
        res.push([])
        for (let i = 0; i < curr_Levev_Len; i++) {
            let node = queue.shift()
            console.log(node)
            res[res.length - 1].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return res
}
console.log(levelOrder(BinaryTree))
