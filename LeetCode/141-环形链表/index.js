var hasCycle = function(head) {
  if (!head) { return false }

  let low = head
  let fast = head.next

  while (fast && fast.next) {
    low = low.next
    fast = fast.next.next

    if (low === fast) {
      return true
    }
  }

  return false
}
