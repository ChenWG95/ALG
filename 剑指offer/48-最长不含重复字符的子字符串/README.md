# 最长不含重复字符的子字符串

[LeetCode链接](https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/)

## 思路

### 我的思路

1. 通过一个i标识遍历字符串，收集直至遇到重复字符串。
2. 当遇到重复字符时，此时与最长字符串进行对比取更长的那个。同时将i设置为之前重复字符的后一位，继续遍历收集
3. 最终当遍历完成后，查看当前是否还有收集的字符串，如果有进行比对
4. 输出结果

## 代码实现

````js
var lengthOfLongestSubstring = function(s) {
  let i = 0
  let startIndex = 0
  let curStr = ''
  let maxStr = ''

  while (i < s.length) {
      let f = curStr.indexOf(s[i])
      if (f === -1) {
          if (!curStr.length) {
              startIndex = i
          }
          curStr += s[i]
          i++
      } else {
          maxStr = maxStr.length > curStr.length ? maxStr : curStr
          curStr = ''
          i = startIndex + f + 1
          startIndex = 0
      }

      if (curStr.length) {
        maxStr = maxStr.length > curStr.length ? maxStr : curStr
      }
  }

  return maxStr.length
}
````
