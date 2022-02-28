
//暴力三层for循环
let nums = [-2, 0, 3, -1, 4, 0, 3, 4, 1, 1, 1, -3, -5, 0]
// function threeSum(nums) {
//     let res = []
//     let arr = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let n = i + 2; n < nums.length; n++) {
//                if (nums[i] + nums[j] + nums[n] === 0 && i!==j&&i!==n &&j!==n) {
//                     arr.push(nums[i], nums[j], nums[n])
//                     arr.sort((a, b) => {
//                         return a - b
//                     })
//                     res.push(arr)
//                     arr = []
//                 }
//             }
//         }
//     }
//     return removeRepeat(res)
// }
// function removeRepeat(arr) {
//     const obj = {}
//     arr.forEach(item => !obj[item.toString()] && (obj[item.toString()] = item))
//     return Object.values(obj)
// }
// console.log(threeSum(nums))

function threeSum(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]])
                while (nums[l] === nums[l + 1]) l++
                while (nums[r] === nums[r - 1]) r--
                l++
                r--
            }
            if (sum < 0) l++
            if (sum > 0) r--
        }

    }
    return res
}
console.log(threeSum(nums))