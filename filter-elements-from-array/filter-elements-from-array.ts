// Simple For Loop Solution Time O(N) Space O(N)
function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    let result:number[] = [];
    let length = arr.length;
    for (let i = 0; i < length; i++){
        if (fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
};