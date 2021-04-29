/** 明确base case => 明确状态 => 明确选择 => 定义dp/函数定义 */

/** 
 * 明确base case => 0 1
 * 明确状态 => n
 * 明确选择 
 * 定义dp/函数定义 获取n的值
 */

/** 暴力迭代 */
var fib = function (n) {
  if (n === 0 || n === 1) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

/** 自顶而下 */
var fib = function (n) {
  const memo = []
  
  return helper(n, memo)
}

var helper = function (n, memo) {
  if (n === 0 || n === 1) {
    return n
  }

  if (memo[n]) return memo[n]

  memo[n] = helper(n - 1, memo) + helper(n - 2, memo)
  return memo[n]
}

/** 自底而上 */
var fib = function (n) {
  const dp = new Array(n + 1)

  dp[0] = 0
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

/** 优化 */
var fib = function (n) {
  if (n < 2) return n

  let cur = 1
  let prev = 0

  for (let i = 2; i <= n; i++) {
    [cur, prev] = [(cur + prev) % (1e9+7), cur]
  }

  return cur
}
