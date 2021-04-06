const map = {}

var numWays = function(n) {
  if (map[n]) {
    return map[n]
  }

  if (n === 0 || n === 1) {
      return 1
  }

  map[n] = (numWays(n - 1) + numWays(n - 2)) % 1000000007
  return map[n]
}