# 归并排序

## 思路

将数组拆分为最小单位，然后合并。合并时将拆分出来的左右两个数组比较插入

## 代码实现

````js
function mergeSort(arr) {
  if (arr.length === 1) { return arr }
  const middle = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))
  const result = []

  while (left.length && right.length) {
    const temp = left[0] < right[0] ? left.shift() : right.shift()
    result.push(temp)
  }

  return left.length ? result.concat(left) : result.concat(right)
}
````
