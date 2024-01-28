function numSubmatrixSumTarget(matrix: number[][], target: number): number {
  const m = matrix.length;
  const n = matrix[0].length;

  // calculate prefix sums for every row
  for (const row of matrix) {
    for (let j = 0; j < n - 1; j++) {
      row[j + 1] += row[j];
    }
  }

  let count = 0;

  for (let leftCol = 0; leftCol < n; leftCol++) {
    for (let rightCol = leftCol; rightCol < n; rightCol++) {
      const sumMap = new Map<number, number>();
      sumMap.set(0, 1); // sum -> num of sub matrices whose sum equals sum
      let prefixSum = 0; // sum of matrix (0, left_col, i, right_col)
      for (let i = 0; i < m; i++) {
        prefixSum += matrix[i][rightCol] - (leftCol > 0 ? matrix[i][leftCol - 1] : 0);
        if (sumMap.has(prefixSum - target)) {
          count += sumMap.get(prefixSum - target);
        }
        sumMap.set(prefixSum, (sumMap.get(prefixSum) || 0) + 1);
      }
    }
  }

  return count;
}