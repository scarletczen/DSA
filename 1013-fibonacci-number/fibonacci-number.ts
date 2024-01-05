// DP with Tabulation Time O(n) Space O(1)
function fib(n: number): number {
    if (n < 2) return n;

    let prev2 = 0, prev = 1;

    for (let i = 2; i <= n; i++) {
        let tmp = prev2 + prev;
        prev2 = prev
        prev = tmp
    }

    return prev
};