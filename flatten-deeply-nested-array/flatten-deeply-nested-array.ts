type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {   
    if (n === 0) {
        return arr;
    }    

    const result: MultiDimensionalArray = [];
    
    arr.forEach(el => {
        if (typeof el === 'number') {
            result.push(el);
        } else {
            result.push(...flat(el, n - 1));
        }
    })

    return result;
};