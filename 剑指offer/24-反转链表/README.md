# 反转链表

[LeetCode链接](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)

## 思路

### 迭代

遍历节点，存储`next节点`、`cur节点`与`prev节点`，首先取出next节点，然后将cur节点指向prev节点，再将prev设置为cur节点、cur设置为next节点

### 递归

将`1=>2=>3`反转的问题如下剖析

1. `1=>2=>3`的反转等同于：`2=>3`反转后，头节点指向`1`
2. `2=>3`反转等同于：`3`节点指向`2`

代码基本为：

````js
// `1=>2=>3`的反转
function reverseList(head) {
  // 当只反转3时，直接返回3
  if (!head || !head.next) {
    return head
  }

  // 反转`2=>3`
  const newReverseList = reverseList(head.next)
  // 拿到反转后的头节点是之前传入的head.next，也就是`2`
  const newReverseListTail = head.next
  // 将该头节点指向`1`
  newReverseListTail.next = head
}
````

## 代码实现

````js
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

/** 递归解法：同思路递归中代码所示 **/
````
