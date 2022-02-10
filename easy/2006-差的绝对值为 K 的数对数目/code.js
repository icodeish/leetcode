//解法1
var nums = [3, 2, 1, 5, 4]
var k = 2
var countKDifference = function (nums, k) {
    let count = 0
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                ++count
            }
        }
    }
    return count
};
console.log(countKDifference(nums, k))