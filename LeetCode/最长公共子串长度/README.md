# 最长公共子串长度

[LeetCode链接](/)

## 思路

通过两字符串建立矩阵，取斜线最长

1.明确base case
base case均为0

2.明确状态
状态转移方程：`dp[i][j] = dp[i -1][j - 1] + 1`
`i === j`时，说明属于公共
  `dp[i][j] = dp[i - 1][j - 1] + 1`，斜线上若之前有说明有过公共值，连续的则相加
  若`i === 0`或`j === 0`，此时直接设为1，因为不存在-1

3.明确选择

4.定义dp/函数定义
dp为矩阵的，目的是找到最长的dp[i][j]的值

## 代码实现

````js
var findLength = function (nums1, nums2) {
  const l1 = nums1.length
  const l2 = nums2.length
  const dp = new Array(l1).fill(new Array(l2).fill(0))

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1
        }
      }
    }
  }

  return dp[l1][l2]
}
````
