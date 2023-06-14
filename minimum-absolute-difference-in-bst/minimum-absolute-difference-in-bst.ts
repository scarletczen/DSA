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

function getMinimumDifference(root: TreeNode | null): number {
    let min = Infinity;
    let prevNode;
    function inorderTraversal (node) {
        if (!node) return;
        inorderTraversal(node.left);

        if(prevNode){
            min = Math.min(min, node.val - prevNode.val);
        }
        
        prevNode = node; 
        inorderTraversal(node.right);
    }
    inorderTraversal(root);
    return min;
};