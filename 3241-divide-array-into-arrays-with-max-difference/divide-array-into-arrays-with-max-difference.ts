// Time O(nlogn) Space O(n)
function divideArray(nums: number[], k: number): number[][] {
    const sortedNums = [...nums].sort((a,b)=>a-b);
    const ans = [];
    for(let i=0; i<sortedNums.length; i+=3){
        if (sortedNums[i+2] - sortedNums[i] > k){
            return [];
        }
        ans.push([sortedNums[i], sortedNums[i+1], sortedNums[i+2]]);
    }
    return ans;
};