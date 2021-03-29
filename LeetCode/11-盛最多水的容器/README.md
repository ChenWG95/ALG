# 盛最多水的容器

[LeetCode链接](https://leetcode-cn.com/problems/container-with-most-water/)

## 思路

### 暴力迭代

迭代所有的两柱子的组合，计算面积，比出最大值

### 双指针

首先看一下我们的面积计算公示`area = Math.min(height[i], height[j]) * (j - i)`，所以想要最大面积，主要由两个条件构成

1. `j - i`：也就是差值
2. `Math.min(height[j], height[i])`：height[j]和height[i]较小的一方为短板，所以我们需要height[i]和height[j]都能尽量大一些

于是我们创建`i`和`j`两个指针分别指向`最左边`和`最右边`。比较`height[i]`与`height[j]`的值，较小的一方（装水的瓶颈）逐渐往中间靠拢，直至找到一个大于当前height的值。（因为往中间靠拢的过程中`j - i`肯定是逐渐变小的，唯一能比之前大的机会就是`height[j]`或`height[i]`足够的大）

## 代码实现

````js
function maxArea (height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0

  while(i < j) {
    maxArea = Math.max(Math.min(height[i], height[j]) * (j - i), maxArea)

    if (height[i] <= height[j]) {
      const hi = height[i]
      while(height[i] <= hi && i < j) { // 找到比hi高的
        i++
      }
    } else {
      const hj = height[j]
      while(height[j] <= hj && i < j) { // 找到比hj高的
        j--
      }
    }
  }

  return maxArea
}
````
