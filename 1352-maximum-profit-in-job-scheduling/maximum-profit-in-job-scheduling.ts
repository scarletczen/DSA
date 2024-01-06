// Memoization Time O(n^2) Space O(n)
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const jobs = [];
    const memo = Array(startTime.length).fill(null);

    for(let i=0; i<startTime.length; i++){
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }
    jobs.sort((a,b)=>a[0]-b[0]);

    function run(idx:number){
       if (idx >= jobs.length) return 0;
       if (memo[idx]) return memo[idx];
       const dontTake = run(idx+1);
       let curr = idx;
       while(curr < jobs.length && jobs[curr][0] < jobs[idx][1]) curr++;
       const take = run(curr) + jobs[idx][2];
       memo[idx] = Math.max(dontTake, take);
       return memo[idx];
    }
    return run(0);
};