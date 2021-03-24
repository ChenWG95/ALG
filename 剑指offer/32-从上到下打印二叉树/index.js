function levelOrder(root) {
  if (root === null || root === undefined) return []

  const arr = [root]
  let zIndex = 0
  const result = []

  while (arr.length) {
    let n = arr.length
    result[zIndex] = []

    while (n) {
      const node = arr.shift()

      if (node.val !== null && node.val !== undefined) {
        result[zIndex].push(node.val)
      }

      if (node.left) {
        arr.push(node.left)        
      }

      if (node.right) {
        arr.push(node.right)
      }

      n--
    }
    zIndex++
  }

  return result
}
