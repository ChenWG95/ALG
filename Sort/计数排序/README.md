# 计数排序

## 思路

通过值作为索引进行计数，则可自动进行排序（只适用于整数）

## 代码实现

````js
function countingSort(arr) {
  const arrNum = []
  const result = []

  arr.map(item => {
    if (!arrNum[item]) {
      arrNum[item] = 0
    }
    arrNum[item]++
  })

  arrNum.map((item, index) => {
    while (item) {
      result.push(index)
      item--
    }
  })

  return result
}
````
