//解法1
let nums=[1,2,3,4]
let target=4 
function twoNum(nums,target){
    let arr=[]
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                arr.push(i,j)
                return arr
            }
        }
    }
}
console.log(twoNum(nums,target))