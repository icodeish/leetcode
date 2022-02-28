//解法1
// let list1 ={
//     val:1,
//     next:{
//         val:2,
//         next:{
//             val:3,
//             next:null
//         }
//     }
// }
// let list2={
//     val:4,
//     next:{
//         val:5,
//         next:{
//             val:6,
//             next:null
//         }
//     }
// }
function LinkedList(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let list=new LinkedList()
console.log(list)
// var mergeTwoLists=function(list1,list2){
//     if(list1===null) return list2
//     if(list2===null) return list1
//     else if(list1.val<list2.val){
//         list1.next=mergeTwoLists(list1.next,list2)
//         return list1
//     }
//     else{
//         list2.next=mergeTwoLists(list1,list2.next)
//         return list2
//     }
// }
// console.log(mergeTwoLists(list1,list2))