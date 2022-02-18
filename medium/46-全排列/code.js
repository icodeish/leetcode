//解法 1
function permute(nums) {
    let res = []
    let set = new Set()
    function dfs() {
        if (set.size === nums.length) {
            res.push(Array.from(set))
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) continue
            set.add(nums[i])
            dfs()
            set.delete(nums[i])
        }
    }
    dfs()
    return res
}