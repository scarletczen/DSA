function findJudge(n: number, trust: number[][]): number {
     // Initialize array with 1..n
    // n + 1, so count is easier 
    const counts = new Array(n+1).fill(0);
    
    // Iterate through n people    
    for(let [i,j] of trust) {
        // If the person trusts somebody, then it does not meet requirement 1
        counts[i] -= 1
        
        // Count the people they trust
        counts[j] += 1
    }

    // If n-1 exists, then its the judge since the judge trusts no one except themselves
    // and everyone else trusts the judge, then its n-1
    for(let i = 1; i < counts.length; i++) {
        if ((n-1) === counts[i]) {
            return i;
        }
    }
    
    return -1
};