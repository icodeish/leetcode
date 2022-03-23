function removeNthFromEnd(head, n) {
    let fast, slow
    fast = slow = head
    while (n-- > 0) {
        fast = fast.next
    }
    if (fast == null) {
        return head.next
    }
    while (fast != null && fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
}

