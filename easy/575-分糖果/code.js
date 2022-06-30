
//解法1
const candyType = [1, 1, 2, 2, 3, 3]
function distributeCandies(candyType) {
    let candyMaxNum = candyType.length / 2
    let typeMaxNum = [...new Set(candyType)].length
    return candyMaxNum <= typeMaxNum ? candyMaxNum : typeMaxNum
}
console.log(distributeCandies(candyType))