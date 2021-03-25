# 合并两个有序链表

[LeetCode链接](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

## 思路

### 迭代

1. 创建一个新节点`result`作为新的链表头，然后提供一个指针`prev`指向链表的下一位。
2. 比较i与j，找到其中小的那个，`prev`指向它，同时对应的链表（i或j小的那个）向后移动一位，继续比较
3. 如果i或j遍历完了，则`prev`可以直接指向剩余的那个链表，最后返回结果`result.next`（去除刚开始创建的无用新节点）

### 递归

将合并链表问题拆分为`比较两个链表最小的值 => 剩下排序的链表`进行解决，如`[1, 3, 5]`与`[2, 4, 6]`则为`1 => [3, 5] [2, 4, 6]`。

## 代码实现

````js
/** 迭代解法 **/
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

/** 递归解法 **/
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
````
