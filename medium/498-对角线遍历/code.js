const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
function findDiagonalOrder(mat) {
    const res = []
    const row = mat.length
    const col = mat[0].length
    const map = new Map()
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let k = i + j
            if (!map.has(k)) map.set(k, [])
            map.get(k).push(mat[i][j])
        }
    }
    for (let [k, v] of map.entries()) {
        k % 2 === 1 ? res.push(...v) : res.push(...v.reverse())
    }
    return res
}
console.log(findDiagonalOrder(mat))
