# 字符串大数字相加

[LeetCode链接](https://leetcode-cn.com/problems/add-strings/solution/)

## 思路

通过padStart将字符串转化为相同位数，然后按位计算

## 代码实现

````js
var addStrings = function(num1, num2) {
  const maxLength = Math.max(num1.length, num2.length)
  const str1 = num1.padStart(maxLength, '0')
  const str2 = num2.padStart(maxLength, '0')

  let flag = 0
  let result = ''

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(str1[i]) + parseInt(str2[i]) + flag

    flag = (sum / 10) >= 1 ? 1 : 0
    result = (sum % 10) + result
  }

  if (flag) {
    result = '1' + result
  }

  return result
};
````
