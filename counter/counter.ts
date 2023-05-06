function createCounter(n: number): () => number {
    let adder = 0;
    return function() {
        let value = n+adder;
        adder++;
        return value;
    };
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */