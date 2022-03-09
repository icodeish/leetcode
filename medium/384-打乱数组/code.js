const nums = [1, 2, 3]
function Solution(nums) {
    this.nums = nums
    this.original = this.nums.slice()
}

Solution.prototype.reset = function () {
    this.nums = this.original.slice()
    return this.nums
}

Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.nums.length; i++) {
        let j = Math.floor(Math.random() * this.nums.length)
        let temp = this.nums[i]
        this.nums[i] = this.nums[j]
        this.nums[j] = temp
    }
    return this.nums
}

var solute = new Solution(nums)
console.log(solute.reset())
console.log(solute.shuffle())

