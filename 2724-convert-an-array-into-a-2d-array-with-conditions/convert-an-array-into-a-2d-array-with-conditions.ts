function findMatrix(nums: number[]): number[][] {
    let m = new Map();
    let matrix = new Array();
    for(const x of nums) {
        m.set(x, m.has(x) ? m.get(x)+1 : 0);
        if(matrix.length <= m.get(x)) matrix.push(new Array());
        matrix[m.get(x)].push(x);
    }
    return matrix;
};