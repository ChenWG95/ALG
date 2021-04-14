# 顺时针打印矩阵

[LeetCode链接](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

## 思路

通过设定四个顶点的方式进行遍历。遍历按照下面的方式进行遍历

````js
1 1 1 1
4     2
4 3 3 2
````

需要注意的是，在进行3和4的遍历时需要判断是否有高可以支撑起这个环（`yEnd - yStart > 0 && xEnd - xStart > 0`），有环才会遍历到3、4两步

## 代码实现

````js
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }

  let xStart = 0
  let yStart = 0
  let xEnd = matrix[0].length - 1
  let yEnd = matrix.length - 1
  const result = []

  while (xStart <= xEnd && yStart <= yEnd) {
    for (let i = xStart; i <= xEnd; i++) {
      result.push(matrix[yStart][i])
    }

    for (let i = yStart + 1; i <= yEnd; i++) {
      result.push(matrix[i][xEnd])
    }

    if (xEnd > xStart && yEnd > yStart) {
      for (let i = xEnd - 1; i >= xStart + 1; i--) {
        result.push(matrix[yEnd][i])
      }
  
      for (let i = yEnd; i >= yStart + 1; i--) {
        result.push(matrix[i][yStart])
      }
    }
    xStart++
    yStart++
    xEnd--
    yEnd--
  }

  return result
}
````
