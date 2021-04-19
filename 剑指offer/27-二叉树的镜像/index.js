var mirrorTree = function(root) {
  if (root === null) return null
  const temp = root.left
  root.left = root.right
  root.right = temp

  mirrorTree(root.left)
  mirrorTree(root.right)
  return root
}
