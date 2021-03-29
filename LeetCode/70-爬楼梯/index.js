const map = {}

var climbStairs = function(n) {
  if (n < 2) { return n }

  if (map[n]) { return map[n] }

  map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return map[n]
}
