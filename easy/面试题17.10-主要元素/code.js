//解法1
let nums=[1,2,5,9,5,9,5,5,5]
var majorityElement = function(nums) {
    let len=nums.length/2
    nums.sort((a,b)=>{
        return a-b
    })
    let count=1
    let flag=-1
    getMaxCount(nums)
    function getMaxCount(nums){
        for(let i=1;i<=nums.length;i++){
            if(nums[i]===nums[i-1]){
          console.log(`------`)
            count++
            console.log(count)
            if(count>len){
                console.log("当前的count为"+count)
                flag=nums[i]
                break
                
            }
           
            
            }else{
                nums.splice(0,count)
                console.log(nums)
                getMaxCount(nums)
            }
          
        }
        return flag
        
    }

};
console.log(majorityElement(nums))