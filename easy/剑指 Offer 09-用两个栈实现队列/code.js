function CQueue() {
    this.inStack = []
    this.outStack = []
}
CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value)
}
CQueue.prototype.deleteHead = function () {
    if (this.outStack.length) {
        return this.outStack.pop()
    } else {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop())
        }
        if (!this.outStack.length) return -1
        return this.outStack.pop()
    }
}