//解法1 贪心算法
let prices = [7, 1, 5, 3, 6, 4]
var maxProfit = function (prices) {
    let total = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            total += prices[i + 1] - prices[i]
        }
    }
    return total
};

console.log(maxProfit(prices))