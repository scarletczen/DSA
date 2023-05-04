/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

 // SLOW AND FAST POINTER SOLUTION Time O(N) Space O(1)
function reorderList(head: ListNode | null): void {
    let slow: ListNode | null | undefined = head;
    let fast: ListNode | null | undefined = head?.next;

    // Find the middle
    while (fast && fast.next) {
        slow = slow?.next;
        fast = fast?.next?.next;
    }

    // Reverse the second half
    if (!(slow && slow.next)) return;
    let second: ListNode | null = slow.next;
    slow.next = null;
    let prev: ListNode | null = null;
    while (second) {
        let temp = second.next;
        second.next = prev;
        prev = second;
        second = temp;
    }

    // Merge both halves
    let first: any = head;
    second = prev;
    while (second) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};