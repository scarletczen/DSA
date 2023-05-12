type F = (...args: any[]) => void
// Throttling with Stored Arguments
function throttle(fn: F, t: number): F {
    let wait = false;
    let storedArgs = null;

    function checkStoredArgs () {
        if (storedArgs === null) {
            wait = false;
        } else {
        fn(...storedArgs);
        storedArgs = null;
        setTimeout(checkStoredArgs, t);
        }
    }

    return (...args) => {
        if (wait) {
            storedArgs = args;
            return;
        }

        fn(...args);
        wait = true;
        setTimeout(checkStoredArgs, t);
    }
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */