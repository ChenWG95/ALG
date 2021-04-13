var reverseLeftWords = function(s, n) {
    if (s.length < n) return false
    
    return s.slice(n) + s.slice(0, n)
}