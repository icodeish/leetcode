//解法1
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let k = 9
var rotate = function (nums, k) {
    if (nums.length === k) {
        return nums
    }
    if (nums.length < k) {
        k = k % nums.length
    }
    let new_arr = nums.splice(nums.length - k)
    for (let i = new_arr.length - 1; i >= 0; i--) {
        nums.unshift(new_arr[i])
    }
    return nums
};
console.log(rotate(nums, k))
