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
// Reverse Second Half Solution Time O(N) Space O(1)
function pairSum(head: ListNode | null): number {
    let slow = head; 
    let fast = head;
    // Hare and Rabbit Traversal
    while (fast && fast.next){
        fast = fast.next?.next;
        slow = slow.next;
    }
    let prev = null;
    let nextNode = new ListNode();
    // Reverse the list
    while(slow){
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }
    // Get Maximum Pair
    let maxVal = 0;
    while(prev){
        maxVal = Math.max(maxVal, prev.val + head.val);
        head = head.next;
        prev = prev.next;
    }
    return maxVal;
};