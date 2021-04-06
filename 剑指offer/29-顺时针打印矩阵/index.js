var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return []
  }

  let xStart = 0
  let yStart = 0
  let xEnd = matrix[0].length - 1
  let yEnd = matrix.length - 1
  const result = []

  while (xStart <= xEnd && yStart <= yEnd) {
    for (let i = xStart; i <= xEnd; i++) {
      result.push(matrix[yStart][i])
    }

    for (let i = yStart + 1; i <= yEnd; i++) {
      result.push(matrix[i][xEnd])
    }

    if (xEnd > xStart && yEnd > yStart) {
      for (let i = xEnd - 1; i >= xStart + 1; i--) {
        result.push(matrix[yEnd][i])
      }
  
      for (let i = yEnd; i >= yStart + 1; i--) {
        result.push(matrix[i][yStart])
      }
    }
    xStart++
    yStart++
    xEnd--
    yEnd--
  }

  return result
}

// spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// spiralOrder([[1,2,3]])
