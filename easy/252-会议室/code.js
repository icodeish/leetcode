const nums = [[7, 10], [2, 4]]
function flag(nums) {
    if (nums.length === 1) return true
    nums.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1][1] >= nums[i][0]) return false
    }
    return true
}
console.log(flag(nums))