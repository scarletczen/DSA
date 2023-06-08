function countNegatives(grid: number[][]): number {
    
    const m: number = grid.length;
    const n: number = grid[0].length;
    // IF LAST ELEMENT IS POSITIVE
    if (grid[m - 1][n - 1] > 0) return 0;
    // IF FIRST ELEMENT IS NEGATIVE
    if (grid[0][0] < 0) return m * n;
    
    let count: number = 0;

    for (let i = 0; i < grid.length; i++) {
        let start: number = 0;
        let end: number = n - 1;

        while (start <= end) {
            const mid: number = start + Math.floor((end - start) / 2);
            if (grid[i][mid] >= 0) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        count += n - 1 - end;
    }

    return count;
};