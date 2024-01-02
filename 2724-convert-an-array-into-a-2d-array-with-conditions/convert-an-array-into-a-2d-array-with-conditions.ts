// Time O(n), Space O(n)
function findMatrix(nums: number[]): number[][] {
    let occurrence = new Map();
    let matrix = new Array();
    
    for(let i=0; i<nums.length; i ++) {
        // Store number of occurrences of any element
        occurrence.set(nums[i], occurrence.has(nums[i]) ? occurrence.get(nums[i])+1 : 0);
        // Create a new sub array for every occurrence of the max occurring element
        if(matrix.length <= occurrence.get(nums[i])) matrix.push(new Array());
        matrix[occurrence.get(nums[i])].push(nums[i]);
    }
    
    return matrix;
};