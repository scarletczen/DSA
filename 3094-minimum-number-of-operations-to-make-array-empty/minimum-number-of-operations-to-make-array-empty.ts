// Time O(n) Space O(n)
function minOperations(nums: number[]): number {
    const freqMap = new Map();
    let operations = 0;
    
    nums.forEach(num =>{
        freqMap.set(num, (freqMap.get(num)||0)+1)
    });

    for (const [_, value] of freqMap.entries()){
        if (value === 1){
            return -1;
        }
        operations += Math.floor(value/3);
        if(value % 3 > 0){
            operations++;
        }
    }
    return operations;
};