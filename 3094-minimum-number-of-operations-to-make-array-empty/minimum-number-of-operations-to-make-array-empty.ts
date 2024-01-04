// Time O(n) Space O(n)
function minOperations(nums: number[]): number {
    const freqMap:Record<number,number> = {};
    let operations = 0;
    
    nums.forEach(num =>{
        freqMap[num] = (freqMap[num] || 0) + 1;
    });

    for (const freq of Object.values(freqMap)){
        if (freq === 1){
            return -1;
        }
        operations += Math.floor(freq/3);
        if(freq % 3 > 0){
            operations++;
        }
    }
    return operations;
};