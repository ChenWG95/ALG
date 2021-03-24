const Utils = require('../../utils')

/** 随便找一个排序算法，此处用了冒泡 */
function sort(arr) {
  if (arr.length <= 1) return arr

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

function bucketSort(arr) {
  const bucketSize = 5
  const max = findMaxValue(arr)
  const min = findMinValue(arr)
  const buckets = []
  const result = []

  const bucketNum = Math.ceil((max - min) / bucketSize)

  for (let i = 0; i <= bucketNum; i++) {
    buckets[i] = []
  }
  
  for (let i = 0; i < arr.length; i++) {
    const position = Math.ceil((arr[i] - min) / bucketSize)
    buckets[position].push(arr[i])
  }

  for (let i = 0; i < buckets.length; i++) {
    result.push(...sort(buckets[i]))
  }

  return result
}

function findMaxValue(arr) {
  return arr.reduce((max, cur) => {
    return max > cur ? max : cur
  }, arr[0])
}

function findMinValue(arr) {
  return arr.reduce((min, cur) => {
    return min < cur ? min : cur
  }, arr[0])
}

console.log(bucketSort([1, 3, 2, 5, 4]))