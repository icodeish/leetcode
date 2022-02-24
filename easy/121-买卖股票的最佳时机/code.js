const prices = [7, 1, 5, 3, 6, 4]
function maxProfit(prices) {
    if (prices.length <= 1) return 0
    let min = prices[0]
    let max = 0
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }
    return max
}
console.log(maxProfit(prices))