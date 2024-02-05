function firstUniqChar(s: string): number {
    const charCountMap = new Map();
    for (const char of s){
        charCountMap.set(char, (charCountMap.get(char)||0)+1);
    }
    for(let i=0; i<s.length; i++){
        if(charCountMap.get(s[i])===1){
            return i;
        }
    }
    return -1;
};