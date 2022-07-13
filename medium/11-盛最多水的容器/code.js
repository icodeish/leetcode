//解法1

var maxArea = function (height) {
    let maxArea = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            // (j-i) * Math.min(height[i],height[j])
            maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]))
        }
    }
    return maxArea
};
