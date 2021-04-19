# 二叉树的镜像

[LeetCode链接](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

## 思路

遍历交换

## 代码实现

````js
var mirrorTree = function(root) {
  if (root === null) return null
  const temp = root.left
  root.left = root.right
  root.right = temp

  mirrorTree(root.left)
  mirrorTree(root.right)
  return root
}
````
