// Simple String, Indexes, to Number Solution 
function countSeniors(details: string[]): number {
    let result:number = 0;
    for (let character of details){
        if(+character.substring(11,13) > 60){
            result+=1;
        }
    }
    return result;
};