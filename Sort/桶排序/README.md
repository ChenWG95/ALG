# 桶排序

## 思路

通过数组的最大值和最小值的差，创建n个桶。保证 n * 桶size能涵盖所有的数组值（从最小到最大），然后桶中进行排序后合并桶

## 代码实现

````js
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
````
