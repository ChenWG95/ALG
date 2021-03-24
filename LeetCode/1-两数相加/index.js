function twoSum(arr, sum) {
  const map = new Map()

  for (let i = 0; i < arr.length; i++) {
    const target = sum - arr[i]

    if (map.has(target)) {
      return [i, map.get(target)]
    } else {
      map.set(arr[i], i)
    }
  }

  return 'not found'
}
