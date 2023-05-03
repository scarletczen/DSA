type F = (x: number) => number;

// Reduce Right Solution O(N)
function compose(functions: F[]): F {
    // Acc stores result of every function call
    // Reduce right is the same as reduce but right to left
	 return x => functions.reduceRight((acc,f)=>f(acc),x)
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */