const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]

function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let res = []
    let len = intervals.length
    let temp = intervals[0]
    for (let i = 1; i < len; i++) {
        let item = intervals[i]
        if (item[0] <= temp[1]) {
            temp[1] = Math.max(temp[1], item[1])
        } else {
            res.push(temp)
            temp = item
        }
    }
    res.push(temp)
    return res
}
console.log(merge(intervals))
