var longestPalindrome = function(s) {
  if (s.length <= 1) { return s }

  let ll = 0
  let rr = 0

  for (let i = 0; i < s.length; i++) {
    // aba
    let l = i - 1
    let r = i + 1

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (rr - ll + 1 < r - l + 1) {
        ll = l
        rr = r
      }
      l--
      r++
    }

    // abba
    l = i
    r = i + 1

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (rr - ll + 1 < r - l + 1) {
        ll = l
        rr = r
      }
      l--
      r++
    }
  }

  return s.substring(ll, rr + 1)
}