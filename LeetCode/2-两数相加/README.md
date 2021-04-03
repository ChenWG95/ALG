# 两数相加

[LeetCode链接](https://leetcode-cn.com/problems/add-two-numbers/)

## 思路

由于是链表两数相加，所以我们只需要设置`链表的对应位 = 链表A的对应位置 + 链表B的对应位置`的和。唯一需要考虑的是会存在相加进位的情况，所以我们需要一个变量来进行存储当前是否有`进位操作`。进位操作会在两个场景生效

1. 当下一位`链表A 或 链表B`对应位置有值，则结果`+进位的数字`
2. 当下一位`链表A 和 链表B`均无值，手动拼接一个`进位的数字`

## 代码实现

````js
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
}
````
