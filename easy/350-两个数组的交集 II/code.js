//解法1
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]
// console.log(nums1.indexOf(2))
// nums1.splice(1,1)
// console.log(nums1)
var intersect = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        nums3 = nums1
        nums1 = nums2
        nums2 = nums3
    }
    let arr = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) != -1) {
            arr.push(nums1[i])
            nums2.splice(nums2.indexOf(nums1[i]), 1)
        }
    }
    return arr
};
console.log(intersect(nums1, nums2))