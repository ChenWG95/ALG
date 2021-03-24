const Utils = require('../../utils')

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true // 优化1： 添加flag，如果后续已经排序过则直接返回
    for (let j = 0; j < arr.length - i - 1; j++) { // 优化2：由于之前的排序已经将最大值排序，所以下次遍历的时候无需再次检查，所以arr.length - i - 1
      if (arr[j] > arr[j+1]) {
        Utils.swap(arr, j, j+1)
        flag = false
      }
    }
    if (flag) return arr
  }
  return arr
}

console.log(sort([1, 3, 2, 5, 4]))
