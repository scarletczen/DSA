function getAverages(nums: number[], k: number): number[] {
    if (k === 0) return nums;
    const K = 2 * k + 1;
    const N = nums.length;
    const ans = new Array(N).fill(-1);

    if (nums.length < K) return ans;

    let acc = 0;
    for (let i = 0; i < K; i++) {
        acc += nums[i];
    }
    ans[k] = Math.floor(acc/K);
    
    for (let i = k + 1; i < N - k; i++) {
        acc -= nums[i-k-1];
        acc += nums[i+k];
        ans[i] = Math.floor(acc/K);
    }

    return ans;
};