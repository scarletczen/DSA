function climbStairs(n: number, cache = []): number {
    if(n in cache){
        return cache[n]
    }
    if(n <= 2){
        return n
    } else {
        cache[n] = climbStairs(n-2, cache) + climbStairs(n-1, cache)
    }
    return cache[n]
};