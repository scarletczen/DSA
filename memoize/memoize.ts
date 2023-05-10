// HashMap Solution 

type Fn = (...params:any)=>any;

function memoize(fn: Fn): Fn {
    const argsToResult: Map<string, ReturnType<Fn>> = new Map();
    return function(...args: Parameters<Fn>): ReturnType<Fn> {
        const hash: string = args.join(',');
        const result: ReturnType<Fn> = argsToResult.get(hash) ?? fn(...args);
        if (!argsToResult.has(hash)) {
            argsToResult.set(hash, result);
        }
        return result;
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */