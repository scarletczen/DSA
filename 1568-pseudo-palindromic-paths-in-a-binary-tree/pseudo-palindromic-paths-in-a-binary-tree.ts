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

function pseudoPalindromicPaths (root: TreeNode | null, c = 0): number {
    if (!root) return 0;
    c ^= 1 << root.val;
    if(!root.left && !root.right) return (c&(c-1)) > 0 ? 0 : 1;
    return pseudoPalindromicPaths(root.left, c)+pseudoPalindromicPaths(root.right, c);
};