function longestArithSeqLength(nums: number[]): number {
    let res = 2;
    const n = nums.length;
    const dp: object[] = []; // [{difference: maxLength}]

    for(let right=1; right<n; right++){
        for(let left=0; left<right; left++){
            const diff = nums[right] - nums[left];
            if(!dp[right]){
                dp[right] = {};
            }
            if(dp[left] && dp[left][diff]){
                const newLength = dp[left][diff] + 1;
                dp[right][diff] = newLength;
                res = Math.max(newLength, res);
            }else{
                dp[right][diff] = 2;
            }
        }
    }

    return res;
};