const numCourses = 4
const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
prerequisites[0][0] = prerequisites[0][1]
        prerequisites[0][1] = prerequisites[0][0]
        console.log(prerequisites)
function findOrder(numCourses, prerequisites) {
    let res = []
    for (let i = 0; i < numCourses.length; i++) {
        prerequisites[0][0] = prerequisites[0][1]
        prerequisites[0][1] = prerequisites[0][0]
    }
    console.log(prerequisites)
    return res
}
function changeNum(prerequisites,i){
    prerequisites[i][0] = prerequisites[i][1]
    prerequisites[i][1] = prerequisites[i][0]
}
console.log(findOrder(numCourses, prerequisites))