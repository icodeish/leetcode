const grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
function maxAreaOfIsland(grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                res = Math.max(res, dfs(grid, i, j))
            }
        }
    }
    return res
}
function dfs(grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === 0) return 0
    let area = 1
    grid[i][j] = 0
    area += dfs(grid, i - 1, j)
    area += dfs(grid, i, j + 1)
    area += dfs(grid, i + 1, j)
    area += dfs(grid, i, j - 1)
    return area
}
console.log(maxAreaOfIsland(grid))

