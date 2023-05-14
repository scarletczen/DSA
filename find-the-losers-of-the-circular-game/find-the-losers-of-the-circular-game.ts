// SET and Circular Array Solution
function circularGameLosers(n: number, k: number): number[] {
  const receivedBall = new Set<number>();
  const players = Array.from({length: n}, (_, i) => i + 1); // Generated Array 1 to N 
  const notReceivedBall = new Set<number>(players); // Initially, will contain every player

  let ballHolder = players[0]; // First Player
  let currentPlayerIndex = 0;  // Index of First Player
  let timesBallWasPassed = 1;

  while (true) {
     // Base Case
     if (receivedBall.has(ballHolder)) {
      return Array.from(notReceivedBall);
    } else {
        receivedBall.add(ballHolder);
        notReceivedBall.delete(ballHolder);

        // Circular Array Index
        const nextPlayerIndex = (currentPlayerIndex + (timesBallWasPassed*k))%n; 
        const nextPlayer = players[nextPlayerIndex];
        ballHolder = nextPlayer;

        currentPlayerIndex = nextPlayerIndex;
        timesBallWasPassed++;
    }
  }
};