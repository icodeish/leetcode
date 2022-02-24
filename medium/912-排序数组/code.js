//
const nums=[5,2,3,1]
function sortArray(nums){
    quickSort(nums,0,nums.length-1)
}
function quickSort(nums,low,high){  
    if(low>=high) return   
    let base=partition(nums,low,high)
    quickSort(nums,low,base-1)
    quickSort(nums,base+1,high)
}
function partition(nums,low,high){
    let i=low
    let j=high
    let comparable =nums[low]

}