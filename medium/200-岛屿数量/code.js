let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
function numIslands(grid) {
    let res = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            //从出现1的位置开始dfs,直到他的周围的周围...的周围没有1,就形成一片岛屿(只要有相邻的2个1，就必能形成岛屿)
            if (grid[i][j] === '1') {  
                dfs(grid, i, j)         
                res++
            }
        }
    }
    return res
}
//
function dfs(grid, i, j) {
    //上下左右，任何一个方向出现数组下标越界或者等于0 ，就终止
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return
    //避免因为连续有1存在,重复计算
    grid[i][j] = '0'
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
}
console.log(numIslands(grid))