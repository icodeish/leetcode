//解法1
var nums1=[4,9,5]
var nums2=[9,4,9,8,4]
var intersection = function(nums1, nums2) {
    let set1=new Set(nums1)
    let set2=new Set(nums2)
    if(set1.size<set2.size){
        [set1,set2]=[set2,set1]
    }
    const set3= new Set()
    for (item of set2){
        if(set1.has(item)){
            set3.add(item)
        }
    }
    return [...set3]
  
};
console.log(intersection(nums1,nums2))