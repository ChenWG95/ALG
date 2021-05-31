# 四数之和

[LeetCode链接](https://leetcode-cn.com/problems/4sum/)

## 思路

四数之和整体思路与三树之和类似，唯一的区别在于把三数之和中的`nums[i] + nums[l] + nums[r]`（通过循环确定一个数字nums[i]）转化为`nums[i] + nums[j] + nums[l] + nums[r]`（通过两层循环确定两个数字nums[i]与nums[j]）

## 代码实现

````js
var threeSum = function(nums) {
  if (nums.length < 3) return []

  nums = nums.sort((a, b) => a - b)
  const result = []
  // 通过map降级为n^2
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i-1]) { continue }

    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      if (nums[l] + nums[r] + nums[i] === 0) {
        result.push([nums[i], nums[l], nums[r]])
        while (nums[l] === nums[l+1]) {
          l++
        }

        while (nums[r] === nums[r-1]) {
          r--
        }
        l++
        r--
      } else if (nums[l] + nums[r] + nums[i] > 0) {
        r--
      } else if (nums[l] + nums[r] + nums[i] < 0) {
        l++
      }
    }
  }

  return result
};
````
