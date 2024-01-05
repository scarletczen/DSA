// DP with Tabulation Time O(N) Space O(1)
function climbStairs(n: number): number {
    if (n < 2){
        return 1;
    }
    // Base case
    let firstStep = 1
    let secondStep  = 1
    // initialise
    let thirdStep;
    for (let i=2; i<n+1; i++){
        // Set current value
        thirdStep = firstStep + secondStep;
        // Move the two previous values forward
        firstStep = secondStep;
        secondStep = thirdStep;
    }
    return thirdStep;
}
