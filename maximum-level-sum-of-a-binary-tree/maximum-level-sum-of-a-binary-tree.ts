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

function maxLevelSum(root: TreeNode | null): number {
const levelSums = new Map<number, number>();

	const dfs = (level: number, node: TreeNode): undefined => {
		if (!node) return;

		levelSums.set(
			level,
			levelSums.has(level) ? levelSums.get(level) + node.val : node.val
		);

		dfs(level + 1, node.left);
		dfs(level + 1, node.right);
	};

	dfs(1, root);

	let maxSumLevel = 1;

	levelSums.forEach((val, key) => {
		levelSums.get(maxSumLevel) < val && (maxSumLevel = key);
	});

	return maxSumLevel;
};