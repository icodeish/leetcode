let nums=[1,2,3,4,5]
function lengthOfLIS(nums){
    let res=1
    let dp=Array(nums.length).fill(1)
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]) dp[i]=Math.max(dp[i],dp[j]+1) 
        }
        res=Math.max(res,dp[i])
    }
    return res
}
console.log(lengthOfLIS(nums))