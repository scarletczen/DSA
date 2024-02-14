// Chad JS Solution
function rearrangeArray(nums: number[]): number[] {
    let positiveNums = nums.filter(x=>x>0);
    let negativeNums = nums.filter(x=>x<0);
    let result = [];
    for(let i=0;i<nums.length/2;i++){
        result.push(positiveNums[i], negativeNums[i])
    }
    return result;
};