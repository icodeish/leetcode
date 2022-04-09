function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
let l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)
console.log(l1)
function addTwoNumbers(l1, l2) {
    let head = null, tail = null, carry = 0
    while (l1 || l2) {
        let n1 = l1 ? l1.val : 0
        let n2 = l2 ? l2.val : 0
        let sum = n1 + n2 + carry
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }
        carry = Math.floor(sum / 10)
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry)
    }
    return head
}
console.log(addTwoNumbers(l1, l2))