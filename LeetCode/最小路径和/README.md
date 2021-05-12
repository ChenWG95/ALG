# 最小路径和

[LeetCode链接](https://leetcode-cn.com/problems/minimum-path-sum/)

## 思路

根据动态规划思想，在一个方块中，`i`代表行，`j`代表列

当`i === 0 && j === 0`：此时为初始状态起点，无需计算
当`i === 0 && j > 0`：此时为第一行，由于只能往右方向走，所以第一行的只能`dp[i][j] = dp[i][j - 1] + grid[i][j]`
当`i > 0 && j === 0`：此时为第一列，由于只能往下方向走，所以第一列的只能`dp[i][j] = dp[i - 1][j] + grid[i][j]`
当`i > 0 && j > 0`：此时为可右可下方向，所以选择一个最小值`dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + gird[i][j]`

最终推导出`dp[i][j]`结果

## 代码实现

````js
var minPathSum = function(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        continue
      }

      if (i === 0 && j > 0) {
        grid[i][j] = grid[i][j - 1] + grid[i][j]
      }

      if (i > 0 && j === 0) {
        grid[i][j] = grid[i - 1][j] + grid[i][j]
      }

      if (i > 0 && j > 0) {
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
      }
    }
  }

  return grid[grid.length - 1][grid[0].length -1]
}
````
