var maxSubArray = function(nums) {
  let maxSum = 0
  let res = nums[0]

  for (let num of nums) {
    if (num + maxSum > num) {
      maxSum += num
    } else {
      maxSum = num
    }

    res = Math.max(res, maxSum)
  }

  return maxSum
}
