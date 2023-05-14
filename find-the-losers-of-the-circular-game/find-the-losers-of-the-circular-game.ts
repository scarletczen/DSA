// Simple Circular Array Solution
function circularGameLosers(n: number, k: number): number[] {
  const result = Array.from({length:n},(_,index)=>index+1);
  let currentPlayerIndex = 0;
  let multiplier = 1;

  while (true) {
    
    if (result[currentPlayerIndex] === 0) {
      return result.filter((item)=>item > 0);
    } else {
      result[currentPlayerIndex] = 0;
      currentPlayerIndex = (currentPlayerIndex + (multiplier * k )) % n;
      multiplier += 1;
    }
  }
};