function distanceK(  root: TreeNode | null,  target: TreeNode | null,  k: number ): number[] {
  const parents = new Map<TreeNode, TreeNode>();
  const seen = new Set();
  const result: number[] = [];

  function dfs(root: TreeNode, parent: TreeNode) {
    if (root !== null) {
      parents.set(root, parent); // store parents of each node to be able to traverse up and down within tree

      dfs(root.left, root);
      dfs(root.right, root);
    }
  }
  dfs(root, null); 
  
   const queue = [target];
   
  seen.add(target);
  seen.add(null);
  
  let distance = 0;
  while (queue.length > 0) {
  
    const range = queue.length;
	
    for (let index = 0; index < range; index++) {
      if (k == distance) {
        while (queue.length > 0) {
          result.push(queue.shift()?.val);
        }
        console.log(result);
        return result;
      }
      const node = queue.shift();

      if (node.left !== null && !seen.has(node.left)) {
        seen.add(node.left);
        queue.push(node.left);
      }
      if (node.right !== null && !seen.has(node.right)) {
        seen.add(node.right);
        queue.push(node.right);
      }
      const parent = parents.get(node);
      if (parent !== null && !seen.has(parent)) {
        seen.add(parent);
        queue.push(parent);
      }
    }
    distance++;
  }

  return [];
}