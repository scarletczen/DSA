// Sorting Solution
function matrixSum(nums: number[][]): number {
    let sum:number = 0;
    let columns = nums[0].length;
    let rows = nums.length;
    // Sort Every Row
    for (let i = 0; i < rows; i++) {
        nums[i].sort((a, b) => a - b);
    }
   // Iterate through each row of a column, the each of row next column etc.
    for (let j = 0; j < columns; j++) {
        let maxOfColumn = 0;
        // Find max element in the column
        for (let i = 0; i < rows; i++) {
            maxOfColumn = Math.max(nums[i][j], maxOfColumn);
        }
        // Add to the sum
        sum += maxOfColumn;
    }  
    
    return sum;
};
