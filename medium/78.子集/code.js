let nums = [1, 2, 3]
function subsets(nums) {
    let res = []
    let path = []
    function backtrack(startIndex) {
        res.push(path.slice())
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(i + 1)
            path.pop()
        }
    }
    backtrack(0)
    return res
}
console.log(subsets(nums))

