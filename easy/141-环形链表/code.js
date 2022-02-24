function hasCycle(head) {
    if (!head) return false
    let fast = head
    let slow = head
    while (slow && fast && slow.next) {
        fast = fast.next
        slow = slow.next.next
        if (fast === slow) return true
    }
    return false
}