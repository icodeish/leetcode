let nums = [3, 2, 1, 5, 6, 4]
let k = 2
function findKthLargest(nums, k) {
    const len = nums.length
    const targetIndex = len - k
    let left = 0,
        right = len - 1
    while (left < right) {
        const index = partition(nums, left, right)
        if (index === targetIndex) {
            return nums[index]
        } else if (index < targetIndex) {
            left = index + 1
        } else {
            right = index - 1
        }
    }
    return nums[left]
}
function partition(nums, start, end) {
    const povit = nums[start]
    while (start < end) {
        while (start < end && nums[end] >= povit) {
            end--
        }
        nums[start] = nums[end]
        while (start < end && nums[start] < povit) {
            start++
        }
        nums[end] = nums[start]
    }
    nums[start] = povit
    return start
}
console.log(findKthLargest(nums, k))