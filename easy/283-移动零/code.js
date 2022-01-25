//移动零
var nums=[0,0,2,0,3,5,0]
var moveZeroes = function(nums) {

    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            let tmp=nums[i]  //第一次循环 :当i=2时,  tmp=2
            nums[i]=nums[j]  //  nums[2]=nums[1]
            nums[j++]=tmp    //  nums[0]=nums[2]  j=1
        }
    }
    return nums
    
};
console.log(moveZeroes(nums))