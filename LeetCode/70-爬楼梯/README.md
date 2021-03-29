# 爬楼梯

[LeetCode链接](https://leetcode-cn.com/problems/climbing-stairs/)

## 思路

`爬n层楼梯的组合数` = `爬n-1层楼梯的组合数` + `爬n-2层楼梯的组合数`。可以使用map存储已经计算出的结果，降低运行开销

## 代码实现

````js
const map = {}

var climbStairs = function(n) {
  if (n < 2) { return n }

  if (map[n]) { return map[n] }

  map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return map[n]
}
````
