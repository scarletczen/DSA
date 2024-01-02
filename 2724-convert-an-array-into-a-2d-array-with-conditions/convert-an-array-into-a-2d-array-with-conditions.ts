// Time O(n), Space O(n)
function findMatrix(nums: number[]): number[][] {
    let occurrence = new Map();
    let matrix = new Array();
    
    for(const item of nums) {
        // Store number of occurrences of any element
        occurrence.set(item, occurrence.has(item) ? occurrence.get(item)+1 : 0);
        // Create a new sub array for every occurrence of the max occurring element
        if(matrix.length <= occurrence.get(item)) matrix.push(new Array());
        matrix[occurrence.get(item)].push(item);
    }
    
    return matrix;
};