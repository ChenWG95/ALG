function mergeSort(arr) {
  if (arr.length === 1) { return arr }
  const middle = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))
  const result = []

  while (left.length && right.length) {
    const temp = left[0] < right[0] ? left.shift() : right.shift()
    result.push(temp)
  }

  return left.length ? result.concat(left) : result.concat(right)
}

console.log(mergeSort([1, 5, 3, 2, 4]))
