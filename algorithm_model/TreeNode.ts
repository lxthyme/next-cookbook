export default class TreeNode<T> {
    val: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
    constructor(val: T, left: TreeNode<T>, right: TreeNode<T>) {
        this.val = val
        this.left = left
        this.right = right
    }
}
