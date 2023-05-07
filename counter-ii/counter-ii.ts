type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let value = init;
    
    const counterObj = {
        increment(){
            return ++value;
        },
        decrement(){
            return --value;
        },
        reset(){
            return value = init;
        }
    }
    return counterObj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */