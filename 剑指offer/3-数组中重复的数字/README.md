# 数组中重复的数字

[LeetCode链接](https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

## 思路

通过创建Set遍历数组，如果遇到有重复的则进行return

## 代码实现

````js
var findRepeatNumber = function(nums) {
    var set = new Set()
    
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i]
        } else {
            set.add(nums[i])
        }
    }
};
````
