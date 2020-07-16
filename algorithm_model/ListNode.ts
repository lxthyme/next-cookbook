import classes from "*.module.css";

export default class ListNode<T> {
    val: T
    next: ListNode<T>
    constructor(val: T, next: ListNode<T> = null) {
        this.val = val
        this.next = next
    }
}
