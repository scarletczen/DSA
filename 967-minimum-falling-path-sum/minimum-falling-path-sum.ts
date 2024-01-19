// Time O(n*n) Space O(1)
function minFallingPathSum(matrix: number[][]): number {
   for (let n = matrix.length, i = n - 2; i > -1; i--) {
        for (let j = 0; j < n; j++) {
            const current = matrix[i][j];

            const sum1 = current + (j > 0 ? matrix[i + 1][j - 1] : Infinity);
            const sum2 = current + matrix[i + 1][j];
            const sum3 = current + (j < n - 1 ? matrix[i + 1][j + 1] : Infinity);

            matrix[i][j] = Math.min(sum1, sum2, sum3);
        }
    }

    return Math.min.apply(null, matrix[0]);
};