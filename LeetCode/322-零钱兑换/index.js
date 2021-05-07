const coins = [1, 2, 5]

// 明确状态
// 明确选择
// 状态转移方程

// var coinChange = function(coins, amount) {
//   const dp = new Array(amount + 1).fill(amount + 1)
//   dp[0] = 0

//   for (let i = 0; i < coins.length; i++) {
//     dp[coins[i]] = 1
//   }

//   for (let i = 1; i <= amount; i++) {
//     for (let j = 0; j < coins.length; j++) {
//       if (i - coins[j] >= 0) {
//         dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
//         console.log(i, dp[i])
//       } else {
//         dp[i] = -1
//       }
//     }
//   }
//   console.log(dp)
//   return dp[amount]
// }

var coinChange = function(coins, amount) {
  const memo = []

  const dp = function (n) {
    if (n === 0) return 0
    if (n < 0) return -1

    if (memo[n]) return memo[n]

    let res = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < coins.length; i++) {
      const subproblem = dp(n - coins[i])
      if (subproblem === -1) continue
      res = Math.min(dp(n - coins[i]) + 1, res)
      memo[n] = res
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res
  }
  return dp(amount)
}
console.log(coinChange([1, 2, 5], 100))
