//解法1

var nums=[0,0,1,1,2,2,3,4,4,4]
function removeDuplicates(nums){

    var left=0
    var right=1
    for(let i=right;i<nums.length;i++){
        if(nums[left]!==nums[i]){
            nums[++left]=nums[i]
        }
            
    }
    return ++left

}
console.log(removeDuplicates(nums))

