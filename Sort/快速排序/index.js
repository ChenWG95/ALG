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

console.log(quickSort([1, 3, 5, 2, 4]))
