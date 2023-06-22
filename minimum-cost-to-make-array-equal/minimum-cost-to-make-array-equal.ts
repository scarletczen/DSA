function minCost(nums: number[], cost: number[]): number {
    const n = nums.length;
    const slice = n < 50 ? nums : [...nums].sort((a, b) => a - b).slice(Math.floor(n/2 - n*0.05), Math.floor(n/2 + n*0.05) + 1);
    return slice.slice().map(median =>  nums.reduce((acc, curr, i) => acc + Math.abs(curr - median) * cost[i], 0)).sort((a, b) => a - b)[0];
};