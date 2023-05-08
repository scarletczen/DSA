// Time O(N) Solution
function diagonalSum(mat: number[][]): number {
    let result = 0;
    for(let i=0; i < mat.length; i++){
        result += mat[i][i];
        if ((mat.length - 1 - i) !== i){
            result += mat[i][mat.length - 1 - i];
        }
    }
    return result;
};