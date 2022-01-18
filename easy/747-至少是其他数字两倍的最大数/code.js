//解法1
var nums=[1,2,4,67,3,5,8]
function dominantIndex(nums){
    let nums_copy=nums.concat([])
    nums_copy.sort((a,b)=>{
        return a-b
    })
    if(nums.length===1) return 0
     
     if((nums_copy[nums_copy.length-1]/nums_copy[nums_copy.length-2])>=2)
        return nums.findIndex((item)=>{
            return item===nums_copy[nums_copy.length-1]
        })

        return -1
    
}
console.log(dominantIndex(nums))