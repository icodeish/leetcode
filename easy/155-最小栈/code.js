var MinStack = function () {
    this.stack = []
    this.min_stack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};


MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1]
};

