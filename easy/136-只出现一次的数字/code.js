//解法1
var nums = [2,5, 2,3,4,4,3]
var singleNumber = function (nums) {
        nums.sort((a,b)=>a-b)
        for(let i=0;i<nums.length;i+=2){
            if(nums[i]!==nums[i+1]) return nums[i]
        }
    }

console.log(singleNumber(nums))
