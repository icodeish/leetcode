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
function preorderTraversal(root){
    let res=[]
    preorder(root)
    function preorder(root){
        if(!root) return
        res.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    return res
}
console.log(preorderTraversal(root))