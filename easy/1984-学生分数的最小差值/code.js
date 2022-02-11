//解法1
let nums=[9,4,1,7]
let k=2
var minimumDifference = function(nums, k) {
        nums.sort((a,b)=>{
            return a-b
        })
        min_v=Number.MAX_SAFE_INTEGER; //js最大的整数
        for(let i=0;i<nums.length-k+1;i++){
            min_v=Math.min(min_v,nums[i+k-1]-nums[i])
        }
        return min_v
};
console.log(minimumDifference(nums,k))