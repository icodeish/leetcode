//解法1
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

/**
 * 1 2 3  7 4 1
 * 4 5 6  8 5 2
 * 7 8 9  9 6 3
 * 
 * 
 * @param {*} matrix 
 * @returns 
 */
var rotate = function (matrix) {
    let len = matrix.length
    let new_matrix = new Array(len).fill(0).map(() => new Array(len).fill(0))
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            //new_matrix[j][len -1-i] = matrix[i][j]
            new_matrix[i][j] = matrix[len - 1 - j][i]
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = new_matrix[i][j]
        }
    }
    return matrix
}
console.log(rotate(matrix))