var addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0)
  
    let resultNode = result
    let i = l1
    let j = l2
  
    let x = false
  
    while (i || j) {
      const curI = i ? i.val : 0
      const curJ = j ? j.val : 0
  
      let sum = curI + curJ
  
      if (x) {
        sum += 1
        x = false
      }
  
      if (sum < 10) {
        resultNode.next = new ListNode(sum)
      } else {
        // resultNode.val = sum % 10
        resultNode.next = new ListNode(sum % 10)
        // 下一位+1
        x = true
      }
  
      i = i ? i.next : null
      j = j ? j.next : null
      resultNode = resultNode.next
    }
  
    if (x) {
      resultNode.next = new ListNode(1)
    }
  
    return result.next
  };