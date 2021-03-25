# 环形链表

[LeetCode链接](https://leetcode-cn.com/problems/linked-list-cycle/)

## 思路

快慢指针，如果是环的话，跑得快的指针一定追得上跑得慢的指针

## 代码实现

````js
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
````
