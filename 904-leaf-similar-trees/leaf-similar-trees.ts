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
// Time Complexity O(T1 + T2), Space O(T1 + T2), where T is the length of the given tree
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    function dfs(node, leaves){
        if(node != null){
            // Reached a leaf
            if(node.left === null && node.right === null){
                leaves.push(node.val);
            }
            // DFS on left and right
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    }
    let leaves1 = [];
    let leaves2 = [];
    dfs(root1, leaves1);
    dfs(root2, leaves2);
    return (leaves1.length === leaves2.length && leaves1.every((v,i)=>v===leaves2[i]));
};