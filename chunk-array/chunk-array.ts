// Simple Array Slice Solution

function chunk(arr: any[], size: number): any[][] {
    let result = [];
    let index = 0;

    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index += size;
    }

    return result;
};