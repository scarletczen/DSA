function closeStrings(word1: string, word2: string): boolean {
   const frequency1 = new Array(26).fill(0);
    const frequency2 =new Array(26).fill(0);

    for(let letter of word1)
        frequency1[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let letter of word2)
        frequency2[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;

    for(let index=0; index<26; index++){
        if(frequency1[index] == 0 && frequency2[index] != 0)
            return false;
        if(frequency1[index] != 0 && frequency2[index] == 0)
            return false;
    }

    frequency1.sort((a, b) => a - b)
    frequency2.sort((a, b) => a - b)

    return JSON.stringify(frequency1) === JSON.stringify(frequency2);
};