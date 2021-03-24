function isStraight(nums) {
  const noZeroNums = nums.filter(item => item) // 过滤非0数组
  const zeroCount = nums.length - noZeroNums.length // 0出现的次数 = 原数组长度 - 非0数组长度
  const noZeroSet = [...new Set(noZeroNums)]

  if (noZeroSet.length !== noZeroNums.length) { // 非0值中有重复的则不会是顺子
    return false
  }

  const max = Math.max(...noZeroNums)
  const min = Math.min(...noZeroNums)

  if (zeroCount + noZeroNums.length === 5 && max - min < 5) {
    return true
  }

  return false
}

console.log(isStraight([4,7,5,9,2]))