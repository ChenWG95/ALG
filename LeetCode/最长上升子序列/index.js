function fn(nums) {
  const dp = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i ++) {
    if (nums[i - 1] <= nums[i]) {
      dp[i] = dp[i - 1] + 1
    }
  }

  return dp[nums.length - 1]
}
console.log(fn([1, 2, 1, 2, 3]))
