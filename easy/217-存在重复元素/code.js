
//解法1
let nums=[1,2,3,4,5]
function containsDuplicate(nums){
    var newarr=[]
    var flag=false
    for(var i=0;i<nums.length;i++){
        if(newarr.indexOf(nums[i])!=-1){

            flag=true
            break
        }else{
            newarr.push(nums[i])
        }
    }
    return flag
}
console.log(containsDuplicate(nums))
