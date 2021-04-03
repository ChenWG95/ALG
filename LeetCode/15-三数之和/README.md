# 三数之和

[LeetCode链接](https://leetcode-cn.com/problems/3sum/)

## 思路

通过计算两数之和的思路，我们可以把`寻找a + b + c = 0`问题拆解：遍历数组nums，将`nums[i]设为a`，然后`寻找剩下的b和c`使`a + b + c = 0`。我们如何寻找b和c呢？

1. 首先我们将数组nums排序，这样遍历的时候可知`nums[i]`绝对是最小的，此时往后面找`b和c`，因为他们一起相加要=0，往前面找没有意义，因为在前面的数操作时就已经涵盖进去了。（同时可知nums[i] > 0时绝对不可能相加位0
2. 读取i，如果i = i+1，也就是前后两个数相等的话，直接跳过到下一个，防止重复结果
3. 剩下的b、c我们通过`l和r`两个指针来找，`l = i; r = nums.length - 1;`。此时如果

- nums[l] + nums[r] + nums[i] > 0，说明b+c大了，那么大的值往前找比他小的`r--`
- nums[l] + nums[r] + nums[i] < 0，说明b+c不够，那么小的值往后找比他大的`i++`
- nums[l] + nums[r] + nums[i] === 0，说明刚好，存入，同时找到下一个`l`和`r`防止重复结果

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
