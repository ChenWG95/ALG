var findLength = function(nums1, nums2) {
  const l1 = nums1.length
  const l2 = nums2.length
  const dp = new Array(l1).fill(new Array(l2).fill(0))
  let maxLength = 0

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1

          maxLength = Math.max(dp[i][j], maxLength)
        }
      }
    }
  }

  return maxLength
}

var findLength = function(nums1, nums2) {
  const l1 = nums1.length
  const l2 = nums2.length
  const dp = new Array(l1).fill(new Array(l2).fill(0))
  let maxLength = 0

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1
          maxLength = Math.max(dp[i][j], maxLength)
        }
      }
    }
  }
  return maxLength
}

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))

// 矩阵 对角线 动态规划
