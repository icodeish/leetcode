//
const nums = [5, 2, 3, 1]
//基础排序(冒泡,选择,插入)
//进阶排序(归并,快速,希尔,堆,计数,桶,TimSort)
//1.冒泡排序
//原理:比较相邻的两个元素,小的元素放前面,每次循环结束,数组的末尾元素都是最大的
// function sortArray(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = 0; j < nums.length - 1 - i; j++) {
//             if (nums[j] > nums[j + 1]) [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//         }
//     }
//     return nums
// }

//2.选择排序
//原理:从待排序数组中找出最小元素放到i位置上
// function sortArray(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         let min_index = i
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < nums[min_index]) min_index = j
//         }
//         if (i !== min_index) [nums[i], nums[min_index]] = [nums[min_index], nums[i]]
//     }
//     return nums
// }
// console.log(sortArray(nums))

//3.插入排序
function sortArray(nums){

}
