//解法1
let nums1 = [1, 2, 3]
let nums2 = [4]
var findMedianSortedArrays = function (nums1, nums2) {
    let new_arr = nums1.concat(nums2)
    new_arr.sort((a, b) => {
        return a - b
    })
    if (new_arr.length%2 === 0)
        return (new_arr[new_arr.length / 2] + new_arr[new_arr.length / 2 - 1]) / 2
        return new_arr[parseInt(new_arr.length / 2)] 

};
console.log(findMedianSortedArrays(nums1, nums2))