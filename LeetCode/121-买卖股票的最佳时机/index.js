var maxProfit = function(prices) {
  let max = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (max < prices[j] - prices[i]) {
        max = prices[j] - prices[i]
      }
    }
  }

  return max
}

var maxProfit = function(prices) {
  let max = 0
  let min = Number.MAX_SAFE_INTEGER

  for (let i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i]
    } else {
      max = Math.max(prices[i] - min, max)
    }
  }
  return max
}
