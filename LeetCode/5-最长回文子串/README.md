# 最长回文子串

[LeetCode链接](https://leetcode-cn.com/problems/longest-palindromic-substring/)

## 思路

### 暴力解

迭代所有的字符串组合，判断是否为回文字符串，取最大值

### 通过中心节点查找

回文有两种方式

1. aba
2. abba

基本思路：通过遍历字符串，以当前节点为中心获取最长的回文字符串。设立`ll`与`rr`记录最长回文的左右索引，然后遍历。遍历时根据上述的两种回文有两种处理

1. aba：以当前节点`i`为中心，`l`为`i - 1`，`r`为`i + 1`，当`l`与`r`相同且`l`与`r`均合法的情况下，对比并存储最大回文，然后扩大范围继续寻找，直至不满足条件返回
2. abba，以`i`后面的空节点为中心，`l`为`i`，`r`为`i + 1`，根据上述一样的逻辑判断回文字符串

## 代码实现

````js
var longestPalindrome = function(s) {
  if (s.length <= 1) { return s }

  let ll = 0
  let rr = 0

  for (let i = 0; i < s.length; i++) { // 遍历字符串，以当前节点为中心获取最长的回文字符串
    // aba
    let l = i - 1
    let r = i + 1

    while (l >= 0 && r < s.length && s[l] === s[r]) { // 当 l 与 r 相同且 l 与 r 均合法
      if (rr - ll + 1 < r - l + 1) { // 对比并存储最大回文
        ll = l
        rr = r
      }
      // 扩大范围继续寻找
      l--
      r++
    }

    // abba
    l = i
    r = i + 1

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (rr - ll + 1 < r - l + 1) {
        ll = l
        rr = r
      }
      l--
      r++
    }
  }

  return s.substring(ll, rr + 1)
}
````
