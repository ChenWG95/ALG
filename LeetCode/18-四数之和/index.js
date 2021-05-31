var fourSum = function(nums, target) {
  const result = []
  const length = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < length - 3; i++) {
    for (let j = i + 1; j < length - 2; j++) {
      let l = j + 1
      let r = length - 1

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          result.push(nums[i], nums[j], nums[l], nums[r])
          while (nums[l + 1] === nums[l]) l++
          while (nums[r - 1] === nums[r]) r--
          l++
          r--
        } else if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        }
      }
      while (nums[j] === nums[j + 1]) j++
    }
    while (nums[i] === nums[i + 1]) i++
  }
  return result
};

