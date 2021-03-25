# 买卖股票的最佳时机

[LeetCode链接](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)

## 思路

### 智慧解

买卖股票有两个关键点：

1. 买入尽量低
2. 卖出差价尽量高

所以我们遍历，总是设置最小的min（`取对于之后卖出最低的买入价`）然后跳过（因为买入卖出不会在同一天），然后在非买入的那几天通过比较`prices[i] - min`取最高的差价

### 暴力迭代：超出时间限制GG

遍历两层：

1. 通过i遍历第一层从0到prices.length - 2（因为不可能最后一天才买入），取出买入价
2. 遍历第二层从i到prices.length - 1，取出卖出价
3. 比较最高差值

## 代码实现

````js
var maxProfit = function(prices) {
  let max = 0
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else {
      max = Math.max(prices[i] - min, max)
    }
  }

  return max
}
````
