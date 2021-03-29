/** 暴力解：超出时间限制：GG */
var maxArea = function(height) {
  let maxArea = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      maxArea = Math.max(maxArea, Math.abs(j - i) * Math.min(height[j], height[i]))
    }
  }
  return maxArea
}

/** 智慧解：双指针 */
function maxArea (height) {
  let i = 0
  let j = height.length - 1
  let maxArea = 0

  while(i < j) {
    maxArea = Math.max(Math.min(height[i], height[j]) * (j - i), maxArea)

    if (height[i] <= height[j]) {
      const hi = height[i]
      while(height[i] <= hi && i < j) { // 找到比hi高的
        i++
      }
    } else {
      const hj = height[j]
      while(height[j] <= hj && i < j) { // 找到比hj高的
        j--
      }
    }
  }

  return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
