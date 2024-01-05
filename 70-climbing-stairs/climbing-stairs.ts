const cache: number[] = []

function climbStairs(n: number): number {
  if (n in cache){
      return cache[n]
  }
  if (n <= 2) return n
  else {
  cache[n] = climbStairs(n - 2) + climbStairs(n - 1) 
  }
  return cache[n]
}