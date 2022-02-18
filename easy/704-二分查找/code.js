//解法1
let nums = [1, 2, 3, 4, 5, 6, 4, 4, 4, 4, 4, 4, , 44, 4, 4, 4, 4, 4, 4, 4, , 4, 4, 4]
let target = 4
// function search(nums,target){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===target) return i
//     }
//     return -1
// }
// console.log(search(nums,target))


//二分查找
function search(nums, target) {
    let med_index = parseInt(nums.length / 2)
    for (let i = med_index; i < nums.length; i++) {
        if (nums[i] === target) return i
    }
    nums.splice(med_index)
    if (nums.length === 0) return -1
    return search(nums, target)
}
console.log(search(nums, target))