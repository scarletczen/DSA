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

// Swap Values Solution

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let A:ListNode|null = head; 
    let B:ListNode|null = head;
    let K:ListNode|null;
    let temp:number;

    for (let i = 1; i < k; i++){
        A = A.next
    } 
    
    K = A, A = A.next
    
    while (A){
        A = A.next;
        B = B.next
    }
    
    // Swapping
    temp = K.val,
    K.val = B.val,
    B.val = temp
    
    return head
};