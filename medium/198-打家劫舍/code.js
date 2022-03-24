const nums = [2, 7, 9, 3, 1]
function rob(nums) {
    const len = nums.length
    if (len == 0)
        return 0
    let dp = new Array(len + 1)
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[len]
}
console.log(rob(nums))