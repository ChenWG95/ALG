# 回文数

[LeetCode链接](https://leetcode-cn.com/problems/palindrome-number/)

## 思路

先取绝对值然后转化为字符串翻转，最终对比结果。可以对比类似的【5-最长回文字符串】收集策略

## 代码实现

````js
var isPalindrome = function(x) {
  const str = Math.abs(x) + ''
  if (x.length <= 1) return true

  return +str.split('').reverse().join('') === x
}
````
