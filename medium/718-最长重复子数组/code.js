const nums1 = [1, 2, 3, 2, 1]
const nums2 = [3, 2, 1, 4]
function findLength(nums1, nums2) {
    let res = 0
    let dp = Array.from({ length: nums1.length + 1 }).map(() => {
        return Array.from({ length: nums2.length + 1 }).map(() => {
            return 0
        })
    })
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            else {
                dp[i][j] = 0
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
}
console.log(findLength(nums1, nums2))