# 左旋转字符串

[LeetCode链接](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)

## 思路

截取前n个字符串，然后把n之后的字符和之前截取的字符串进行拼接

## 代码实现

````js
var reverseLeftWords = function(s, n) {
    if (s.length < n) return false
    
    return s.slice(n) + s.slice(0, n)
}
````
