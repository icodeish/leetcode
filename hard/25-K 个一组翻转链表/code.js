function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
}
function reverseKGroup(head, k) {
    let nextHead = head
    let index = 0
    while (index < k) {
        if (nextHead === null) return head
        index++
        nextHead = nextHead.next
    }
    let subListNode = reverseKGroup(nextHead, k)
    let newHead = reverseNode(head, k)
    head.next = subListNode
    return newHead

}
function reverseNode(head, k) {
    let prev = null
    let curNode = head
    for (let i = 0; i < k; i++) {
        let next = curNode.next
        curNode.next = prev
        prev = curNode
        curNode = next
    }
    return prev
}
console.log(reverseKGroup(head, 2))