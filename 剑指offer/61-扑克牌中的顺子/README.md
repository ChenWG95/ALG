# 扑克牌中的顺子

[LeetCode链接](https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/)

## 思路

同时满足以下条件即为顺子：

1. 0出现的次数 + 非0数组的长度（去重后） = 5
2. 非0的数组中，最大值 - 最小值 < 5

## 代码实现

````js
function isStraight(nums) {
  const noZeroNums = nums.filter(item => item) // 过滤非0数组
  const zeroCount = nums.length - noZeroNums.length // 0出现的次数 = 原数组长度 - 非0数组长度
  const noZeroSet = [...new Set(noZeroNums)]

  if (noZeroSet.length !== noZeroNums.length) { // 非0值中有重复的则不会是顺子
    return false
  }

  const max = Math.max(...noZeroNums)
  const min = Math.min(...noZeroNums)

  if (zeroCount + noZeroNums.length === 5 && max - min < 5) {
    return true
  }

  return false
}
````
