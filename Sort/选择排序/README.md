# 选择排序

## 思路

选择最小值，然后插入

## 代码实现

````js
function selectionSort(arr) {
  const result = []

  while(arr.length) {
    const minValue = getMinValueIndex(arr)
    result.push(...minValue)
  }
  return result
}

function getMinValueIndex(arr) {
  let min = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i
    }
  }

  return arr.splice(min, 1)
}
````
