# 青蛙跳台阶

[LeetCode链接](https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/submissions/)

## 思路

同`爬楼梯`思路相同，利用动态规划进行统计，Mao优化

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
