function Node(val, children) {
    this.val = val
    this.children = children
}
let root = {
    val: 1,
    children: [
        {
            val: 3,
            children: [
                {
                    val: 5,
                    children: []
                },
                {
                    val: 6,
                    children: []
                }
            ]
        },
        {
            val: 2,
            children: [],
        },
        {
            val: 4,
            children: [],
        }
    ]

}
console.log(root)
function levelOrder(root) {
    if (!root) return []
    let res = []
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let k = queue.shift()
            level.push(k.val)
            queue.push(...k.children)
        }
        res.push(level)
    }
    return res
}
console.log(levelOrder(root))