const headA = {
    val: 4,
    next: {
        val: 1,
        next: {
            val: 8,
            next: null
        }
    }

}
const headB = {

    val: 5,
    next: {
        val: 6,
        next: {
            val: 1,
            next: {
                val: 8,
                next: null
            }


        }
    }

}
function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null) {
        return null
    }
    let l1 = headA, l2 = headB
    while (l1 !== l2) {
        l1 = l1 === null ? headB : l1.next
        l2 = l2 === null ? headA : l2.next
    }
    return l1
}
console.log(getIntersectionNode(headA, headB))