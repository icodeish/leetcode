const target = 7, nums = [2, 3, 1, 2, 4, 3]
function minSubArrayLen(target, nums) {
    let res = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= target) {
                res = Math.min(res, j - i + 1)
                break
            }
        }
    }
    return res === Infinity ? 0 : res
}
console.log(minSubArrayLen(target, nums))