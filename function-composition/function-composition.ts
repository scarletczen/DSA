type F = (x: number) => number;

// Simple For Loop Solution
function compose(functions: F[]): F {
    return function(x:number):ReturnType<F> {
        let length = functions.length;
        if (length === 0) return x;
        let num=x;
        for (let i = length - 1; i >= 0; i--) {
            let cfun = functions[i];
            num=cfun(num);
        }
        return num;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */