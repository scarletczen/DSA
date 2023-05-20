type F = (...args: any[]) => void
// Throttling with Stored Arguments
function throttle(fn: F, t: number): F {
    let shouldWait = false;
    let storedArgs:number[]|null = null;

    function checkStoredArgs () {
        if (storedArgs === null) {
            shouldWait = false;
        } else {
        fn(...storedArgs);
        storedArgs = null;
        setTimeout(checkStoredArgs, t);
        }
    }

    return (...args) => {
        if (shouldWait) {
            storedArgs = args;
            return;
        }

        fn(...args);
        shouldWait = true;
        setTimeout(checkStoredArgs, t);
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */