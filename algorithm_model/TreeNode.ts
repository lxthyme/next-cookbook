export default class TreeNode<T> {
    val: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
    constructor(val: T, left: TreeNode<T> = null, right: TreeNode<T> = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}
