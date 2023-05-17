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
// Simple Stack Solution O(N) Space O(N)
function pairSum(head: ListNode | null): number {
    let nodeStack:number[] = [];
    while(head != null){
        nodeStack.push(head.val);
        head = head.next;
    }
    let max = 0;

    for (let i =0; i<nodeStack.length; i++){
        max = Math.max(max, nodeStack[i] + nodeStack[nodeStack.length - i - 1]);
    }    
    return max;
};