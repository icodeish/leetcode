let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

//  1 3 1
//  1 5 1
//  4 2 1
// 1 2 3
// 4 5 6
function minPathSum(grid) {
    for (let i = 1; i < grid.length; i++) grid[i][0] += grid[i - 1][0]
    for (let j = 1; j < grid[0].length; j++) grid[0][j] += grid[0][j - 1]
    for (let i = 1; i < grid.length; i++)
        for (let j = 1; j < grid[0].length; j++)
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
    return grid[grid.length - 1][grid[0].length - 1]
}
console.log(minPathSum(grid))