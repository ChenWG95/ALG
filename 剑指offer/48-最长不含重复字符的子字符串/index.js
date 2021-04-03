var lengthOfLongestSubstring = function(s) {
  let i = 0
  let startIndex = 0
  let curStr = ''
  let maxStr = ''

  while (i < s.length) {
      let f = curStr.indexOf(s[i])
      if (f === -1) {
          if (!curStr.length) {
              startIndex = i
          }
          curStr += s[i]
          i++
      } else {
          maxStr = maxStr.length > curStr.length ? maxStr : curStr
          curStr = ''
          i = startIndex + f + 1
          startIndex = 0
      }

      if (curStr.length) {
        maxStr = maxStr.length > curStr.length ? maxStr : curStr
      }
  }

  return maxStr.length
}