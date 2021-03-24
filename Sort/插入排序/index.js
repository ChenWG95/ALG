const Utils = require('../../utils')

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]

    let j = i
    while(j > 0 && arr[j] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
}

console.log(insertSort([6, 1, 3, 4, 5]))
