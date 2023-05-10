// Simple For Loop Solution
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let result = init;
    let length = nums.length;
    for (let i = 0; i<length; i++) {
        result = fn(result,nums[i]);
    }
    return result;
};