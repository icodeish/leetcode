//解法1
var s = "dvdf";
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    let arr = s.split("")
    if (arr.length === 1) return 1
    let len = 0
    getNewarr(arr)
    function getNewarr(arr) {
        let new_arr = []
        for (let i = 0; i < arr.length; i++) {
            if (new_arr.indexOf(arr[i]) === -1) {
                new_arr.push(arr[i])
                len = Math.max(len, new_arr.length)

            } else {
                arr.splice(0, 1)
                len = Math.max(len, new_arr.length)
                return getNewarr(arr)
            }


        }

    }
    return len
};
console.log(lengthOfLongestSubstring(s))