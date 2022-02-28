let root={
    val:1,
    left:{
        val:2,
        left:{
            val:4,
            left:null,
            right:null
        },
        right:{
            val:5,
            left:null,
            right:null
        }
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}
function postorderTraversal(root){
    let res=[]
    postorder(root)
    function postorder(root){
        if(!root) return 
        postorder(root.left)
        postorder(root.right)
        res.push(root.val)
    }    
    return res
}