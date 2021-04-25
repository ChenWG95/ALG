var isPalindrome = function(x) {
  const str = Math.abs(x) + ''
  if (x.length <= 1) return true

  return +str.split('').reverse().join('') === x
}