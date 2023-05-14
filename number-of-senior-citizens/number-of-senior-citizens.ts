// Simple String, Indexes, to Number Solution 
function countSeniors(details: string[]): number {
    let result:number = 0;
    for(let i = 0; i < details.length; i++){
        let currentString = details[i];
        let age = +(currentString[11] + currentString[12]);
        if(age > 60){
            result++;
        }
    }
    return result;
};