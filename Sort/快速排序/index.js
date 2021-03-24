const Utils = require('../../utils')

/** 快速排序：解法1 */
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

/** 快速排序：解法2 */
function quickSort(arr) {
  quick(arr, 0, arr.length - 1)
}

function quick(arr, left, right) {
  if (!arr.length) { return arr }
  const middleIndex = partition(arr, left, right)

  if (left < middleIndex) {
    quick(arr, left, middleIndex)
  }

  if (right > middleIndex) {
    quick(arr, middleIndex, right)
  }

  return arr
}

function partition(arr, left, right) {
  const middleIndex = Math.floor((left + right) / 2)
  let i = left
  let j = right

  while(i < j) {
    while (arr[i] < arr[middleIndex]) {
      i++
    }

    while (arr[j] > arr[middleIndex]) {
      j--
    }

    if (i < j) {
      Utils.swap(arr, i, j)
      i++
      j--
    }
  }

  return i
}

console.log(quickSort([1, 3, 5, 2, 4]))
