# 从上到下打印二叉树

[LeetCode链接](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

## 思路

将root作为根放入一个数组，这个数组用来存储当前层的元素，当遍历当前层时，同时收集left与right节点push进数组作为下一层的遍历节点。直至收集完成

## 代码实现

````js
function levelOrder(root) {
  if (root === null || root === undefined) return []

  const arr = [root]
  let zIndex = 0
  const result = []

  while (arr.length) {
    let n = arr.length
    result[zIndex] = []

    while (n) {
      const node = arr.shift()

      if (node.val !== null && node.val !== undefined) {
        result[zIndex].push(node.val)
      }

      if (node.left) {
        arr.push(node.left)        
      }

      if (node.right) {
        arr.push(node.right)
      }

      n--
    }
    zIndex++
  }

  return result
}
````
