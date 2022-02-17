//解法 1
let nums=[1,2,3]
function permute(nums){
  let res=[]
  function add(nums){
      for(let i=0;i<nums.length;i++){
          let arr=[]
          if(arr.indexOf(nums[i])===-1){
              arr.push(nums[i])
          }
      }
  }
  return res
}