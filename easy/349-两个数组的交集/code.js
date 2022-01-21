//解法1
var nums1=[4,9,5]
var nums2=[9,4,9,8,4]
var intersection = function(nums1, nums2) {
    let arr=[]
    for(let i=0;i<nums1.length;i++){
       
           if(nums2.indexOf(nums1[i])){
               arr.push(nums1[i])
           }
  
        return arr
    }
};
console.log(intersection(nums1,nums2))