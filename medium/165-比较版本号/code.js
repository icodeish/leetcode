//解法1
let version1 = "1.0.6"
let version2 = "1.0.6"
function compareVersion(version1, version2) {
    let arr_v1 = version1.split(".")
    let arr_v2 = version2.split(".")
    let i = 0
    let j = 0
    while (i < arr_v1.length || j < arr_v2.length) {
        let a = parseInt(arr_v1[i] ? arr_v1[i] : 0)  
        let b = parseInt(arr_v2[j] ? arr_v2[j] : 0)
        if (a !== b) return a > b ? 1 : -1
        i++
        j++
    }
    return 0
}
console.log(compareVersion(version1, version2))