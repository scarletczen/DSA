function frequencySort(s: string): string {
   let seen ={}; 
    for(let char of s){ // store characters Frequency of given string in map
        seen[char] ? seen[char]++ : seen[char]=1;
    }
    
    // sort characters according to characters Frequency in descending order
    let SortedCharactersArray = Object.keys(seen).sort((a,b)=>seen[b]-seen[a]);
    
    let result = ""
    // iterate through SortedCharactersArray and append character( character frequency )times to result  
    for(let char of SortedCharactersArray)
        result += char.repeat(seen[char]);
    
    return result;
};