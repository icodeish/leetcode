
let root={
    val:4,
    left:{
        val:9,
        left:{
           val:5,
           left:null,
           right:null
        },
        right:{
            val:1,
            left:null,
            right:null
        }
    },
    right:{
        val:0,
        left:null,
        right:null
    }
}


function sumNumbers(root){
    return getSum(root,0)
}
function getSum(root,i){
    if(!root) return 0
    let sum=i*10+root.val
    if(!root.left && !root.right) return sum
    return getSum(root.left,sum) +getSum(root.right,sum)
}
console.log(sumNumbers(root,0))