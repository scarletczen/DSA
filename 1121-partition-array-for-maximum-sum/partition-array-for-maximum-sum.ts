// Time O(n*k) Space O(n)
function maxSumAfterPartitioning(arr: number[], k: number): number {
  const arrayLength = arr.length;
  const dp = new Array(arrayLength + 1).fill(0);
  for(let i=1; i<=arrayLength; i++){
      let currentMax = 0;
      let currentSum = 0;
      for(let j=1; j<=k && i-j>=0;j++){
          currentMax = Math.max(currentMax, arr[i-j]);
          currentSum = Math.max(currentSum, currentMax*j + dp[i-j]);
      }
      dp[i] = currentSum;
  }   
  return dp[arrayLength];
};