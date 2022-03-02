let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
//先确定最开始4个角的下标,依次从上>右>下>左 循环遍历，直到上大于下,左大于右 
function spiralOrder(matrix) {
    let res = []
    let top = 0
    let right = matrix[0].length - 1
    let bottom = matrix.length - 1
    let left = 0
    while (true) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++
        if (top > bottom) break
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--
        if (left > right) break
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--
        if (top > bottom) break
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++
        if (left > right) break
    }
    return res
}
console.log(spiralOrder(matrix))