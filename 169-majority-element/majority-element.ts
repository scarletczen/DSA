function majorityElement(nums: number[]) {
    const arrayLength = nums.length;
    const occurrenceMap:Record<number,number> = {};
    for(let i=0; i<arrayLength; i++){
        occurrenceMap[nums[i]] = (occurrenceMap[nums[i]] ?? 0)+1;
    }
    for(const [key, value] of Object.entries(occurrenceMap)){
        if(value > (arrayLength/2)){
            return key;
        }
    }
    return 0;
};
