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

console.log(countingSort([1, 5, 3, 2, 4]))
