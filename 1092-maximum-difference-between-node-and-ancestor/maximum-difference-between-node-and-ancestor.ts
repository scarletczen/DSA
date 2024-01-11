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
// Time Complexity O(n) number of nodes, Space O(h) h is the height of tree
function maxAncestorDiff(root: TreeNode | null): number {
    if(root === null) return 0;
    let result = 0;

    function findDifference(node:TreeNode|null, min:number, max:number){
        if(node === null) return;

        result = Math.max(result, Math.max(Math.abs(min-node.val), Math.abs(max-node.val)));
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);

        findDifference(node.left, min, max);
        findDifference(node.right, min, max);
    }
    findDifference(root, root.val, root.val);
    return result;
};