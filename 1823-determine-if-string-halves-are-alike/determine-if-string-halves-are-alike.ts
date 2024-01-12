function halvesAreAlike(s: string): boolean {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arrayLength = s.length/2;
    let count = 0;
    
    for(let index = 0; index < arrayLength; index++) {
        if(vowels.has(s[index]))
            count++;

        if(vowels.has(s[index + arrayLength]))
            count--;
    }
    
    return count === 0;
};