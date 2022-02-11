//解法1
let nums1=[1,2,3,0,0,0]
let m=3
let nums2=[2,5,6]
let n=3
var merge = function(nums1, m, nums2, n) {
        nums1.splice(m)
        for(let i=0;i<n;i++){
            nums1.push(nums2[i])
        }
         nums1.sort((a,b)=>{
            return a-b
        })
        return nums1
};
console.log(merge(nums1,m,nums2,n))