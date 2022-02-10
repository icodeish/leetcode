//解法1
var simplifiedFractions = function (n) {
    var arr = []

    //欧几里得理论(辗转相除法) ，用于计算两个数的最大公约数 ，用除数反复除以余数
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }
    for (var i = 1; i < n; i++) {
        for (var j = i + 1; j <= n; j++) {
            if (gcd(i, j) === 1) arr.push(i + "/" + j)
        }
    }
    return arr
};
console.log(simplifiedFractions(5))