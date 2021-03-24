# 两数相加

[LeetCode链接](https://leetcode-cn.com/problems/two-sum/comments/)

## 思路

建立Map，遍历数组，如遇到可以凑成和的值则返回，若无则存入Map（在之后遇到可凑成的值时刚好可取出）

## 代码实现

````js
function twoSum(arr, sum) {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i]

    if (map.has(target)) {
      return [i, map.get(target)]
    } else {
      map.set(arr[i], i)
    }
  }

  return 'not found'
}
````
