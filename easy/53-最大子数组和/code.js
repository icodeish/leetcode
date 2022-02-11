//解法1
var nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    let pre_sum=0;  //之前和
    let max_sum=nums[0] // 最大和
    for(let i=0;i<nums.length;i++){
        pre_sum=Math.max(pre_sum+nums[i],nums[i]) //之前和与当前值比较   
        console.log("第"+i+"次"+"之前和"+pre_sum,"    当前值"+nums[i])
        max_sum=Math.max(max_sum,pre_sum) //之前和与最大和  
        console.log("     最大和"+max_sum,"  之前和"+pre_sum)
        console.log("------------")
                        
    }
    return max_sum
};
console.log(maxSubArray(nums))
/**
 *  -2 -2
 *  -2 -2 
 *   -----
 *  -1  1
 *  -2  1
 *  ------
 *   -4  -3
 *   1  -3
 * -------
 *  0    4
 *  1    4
 * ---------
 *   -3  -1
 *     4  -1
 *  ---------
 *     1   2
 *      4   2
 * -----------
 *     3   1
 *      4   3
 * -----------
 *      -2   -5
 *      4     -2
 * ----------------
 *       2    4
 *       4    4              
 *       
 *
 */