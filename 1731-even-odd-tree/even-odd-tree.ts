/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEvenOddTree(root: TreeNode | null): boolean {
    let queue = [root];
    let steps = 0;

    while(queue.length>0){
        const currLength = queue.length;
        let nextQueue=[];

        for(let i=0; i<currLength;i++){
            const node = queue[i];
            if(steps%2 !== 0){
                if((i<currLength-1 && node.val<=queue[i+1].val) || node.val%2 !== 0){
                    return false;
                }
            }else if((i<currLength-1 && node.val>=queue[i+1].val)|| node.val%2 === 0){
                return false;
            }
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        queue = nextQueue;
        steps++;
    }

    return true;
};