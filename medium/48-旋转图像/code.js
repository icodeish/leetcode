//解法1
var matrix = [[1,2,3],[4,5,6],[7,8,9]]

/**
 * 1 2 3  7 4 1
 * 4 5 6  8 5 2
 * 7 8 9  9 6 3
 * 
 * 
 * @param {*} matrix 
 * @returns 
 */
var rotate = function(matrix) {
    let arr= new Array(matrix.length)
    for(let i=0;i<matrix.length;i++){
        arr[i]=new Array(matrix.length)
    }
    arr[0][0]=1
    console.log(arr)
  
    var j=0
    for(let i=matrix.length-1;0<=i;i--){
            
         
            
    }
    return arr
   
   
};
console.log(rotate(matrix))