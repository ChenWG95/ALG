/** 迭代解法 */
function reverseList(head) {
  let cur = head
  let prev = null

  while (cur) {
    let next = cur.next
    cur.next = prev

    prev = cur
    cur = next
  }
  return prev
}

/** 递归解法 */
function reverseList(head) {
  if (!head || !head.next) {
    return head
  }

  const newReverseList = reverseList(head.next)
  const newReverseListTail = head.next
  
  newReverseListTail.next = head
  head.next = null

  return newReverseList 
}
