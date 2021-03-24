# 快速排序

## 思路

首先取数组中间随意一节点o，将整个数组遍历，将比o小的放左边，比o大的放右边，最终将返回`[...比o小的项, o, ...比o大的项]`的结构。

通过递归，按照上面👆的方法分治`比o小的项`与`比o大的项`

## 代码实现

````js
function quickSort(arr) {
  if (arr.length <= 1) return arr

  const middleIndex = Math.floor(arr.length / 2)
  const o = arr.splice(middleIndex, 1)

  const left = []
  const right = []

  while (arr.length) {
    const obj = arr.shift()
    if (obj >= o) {
      right.push(obj)
    }

    if (obj < o) {
      left.push(obj)
    }
  }

  return quickSort(left).concat(o).concat(quickSort(right))
}
````
