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

console.log(selectionSort([1, 3, 2, 5, 4]))
