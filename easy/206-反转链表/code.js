//解法1
let head = new NodeList(1, 2, 3, 4)
function reverseList(head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
console.log(reverseList(head))

