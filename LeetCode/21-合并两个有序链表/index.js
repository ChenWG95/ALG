function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

function mergeTwoLists(l1, l2) {
  const result = new ListNode(-1)
  let prev = result
  
  while (l1 !== null && l2 !== null) {
    if (l2.val < l1.val) {
      prev.next = l2
      l2 = l2.next
    } else {
      prev.next = l1
      l1 = l1.next
    }
    prev = prev.next
  }

  prev.next = l1 === null ? l2 : l1

  return result.next
}

function mergeTwoLists(l1, l2) {
  if (!l1) {
    return l2
  }

  if (!l2) {
    return l1
  }

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  }

  if (l2.val < l1.val) {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
