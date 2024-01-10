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
// Time Complexity O(n) nodes in tree,  Space Complexity O(h) height of tree
function amountOfTime(root: TreeNode | null, start: number): number {
    let result = 0;
    
    function dfs(node:TreeNode|null, start:number){
        if(node === null) return 0;

        let leftDepth = dfs(node.left, start);
        let rightDepth = dfs(node.right, start);
        
        if(node.val === start){
            result = Math.max(leftDepth, rightDepth);
            return -1;
        } else if(leftDepth >= 0 && rightDepth >= 0){
            return Math.max(leftDepth, rightDepth)+1;
        }
        result = Math.max(result, Math.abs(leftDepth-rightDepth));
        return Math.min(leftDepth, rightDepth) - 1;
    }

    dfs(root, start);
    return result;
};