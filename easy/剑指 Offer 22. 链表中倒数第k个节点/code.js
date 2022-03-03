const head={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
    }
}
const k=2
function getKthFromEnd(head,k){
    let len=0
    let node=head
    while(node){
        node=node.next
        len++
    }
    node=head
    for(let i=0;i<len-k;i++){
        node=node.next
    }
    return node
}
console.log(getKthFromEnd(head,k))