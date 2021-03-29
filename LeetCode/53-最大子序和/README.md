# 最大子序和

[LeetCode链接](https://leetcode-cn.com/problems/maximum-subarray/)

## 思路

这类问题主要是一个遍历比较的过程。在相加之和中：

1. 如`sum + val > val`说明sum有正向推动作用，对应的`sum += val`。
2. 如`sum + val < val`，则说明sum没有正向推动作用，则可直接置为`sum = val`。

同时我们需要两个变量来存储，一个存当前解，一个存最优解

## 代码实现

````js
var maxSubArray = function(nums) {
  let maxSum = 0
  let res = nums[0]

  for (let num of nums) {
    if (num + maxSum > num) {
      maxSum += num
    } else {
      maxSum = num
    }

    res = Math.max(res, maxSum)
  }

  return maxSum
}
````
