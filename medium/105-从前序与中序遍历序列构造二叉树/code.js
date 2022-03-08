const preorder = [3, 9, 20, 15, 7]
const inorder = [9, 3, 15, 20, 7]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    let node = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder.shift())
    node.left = buildTree(preorder, inorder.slice(0, index))
    node.right = buildTree(preorder, inorder.slice(index + 1))
    return node
}
console.log(buildTree(preorder, inorder))