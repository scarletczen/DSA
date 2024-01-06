// Tabulation + Binary Search Time O(n log n) Space O(n)
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const jobs = [];
    const dp = Array(startTime.length + 1).fill(0);

    for(let i=0; i<startTime.length; i++){
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }
    jobs.sort((a,b)=>a[0]-b[0]);

    function binarySearch(idx){
        let low = idx+1;
        let high = jobs.length;
        while (low < high){
            const mid = Math.floor((low+high)/2);
            if (jobs[mid][0] >= jobs[idx][1]) high = mid;
            else low = mid + 1;
        }
        return low;
    }
    for(let i=jobs.length-1; i>=0; i--){
        const next = binarySearch(i);
        dp[i] = Math.max(dp[i+1], jobs[i][2] + dp[next])
    }
    return dp[0];
};