
//暴力三层for循环
let nums = [1,2,-2,-1]
function threeSum(nums) {
    let res = []
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let n = i + 2; n < nums.length; n++) {
                if (nums[i] + nums[j] + nums[n] === 0 && i!==j&&i!==n &&j!==n) {
                    arr.push(nums[i], nums[j], nums[n])
                    arr.sort((a, b) => {
                        return a - b
                    })
                    res.push(arr)
                    arr = []
                }
            }
        }
    }
    return removeRepeat(res)
}
function removeRepeat(arr) {
    const obj = {}
    arr.forEach(item => !obj[item.toString()] && (obj[item.toString()] = item))
    return Object.values(obj)
}
console.log(threeSum(nums))