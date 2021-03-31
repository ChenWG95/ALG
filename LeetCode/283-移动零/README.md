# 移动零

[LeetCode链接](https://leetcode-cn.com/problems/move-zeroes/)

## 思路

### 遍历单次移动：超出时间限制GG

从后往前遍历，遇到0时将所有后续的项往前移动一位，并将0插入最后一位

### 双指针

一个指针用来存储并移动非0的项，另一个指针用来遍历。最终只需要将非0的数字排序完后，将存储非0的指针到数组长度之间全部用0填满即可
`[1, 2, 0, 2, 0]` = `[1, 2, 2]` + `补0`

## 代码实现

````js
var moveZeroes = function(nums) {
  let noZeroPos = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[noZeroPos] = nums[i]
      noZeroPos++
    }
  }
  for (let i = noZeroPos; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}
````
