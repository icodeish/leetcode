var LRUCache = function (capacity) {
    this.capacity = capacity
    this.map = new Map()
}
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let value = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, value)
        return value
    } else {
        return -1
    }
}
LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value)
    }
}
let lRucache = new LRUCache(2)
lRucache.put(1, 1)
console.log(lRucache)

