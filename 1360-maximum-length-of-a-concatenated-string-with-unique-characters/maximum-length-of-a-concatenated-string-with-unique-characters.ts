function maxLength(arr: string[]): number {
  let maxLen = 0;
  let arrCopy = arr.filter(isUnique);
  let mem = {};
  maxLen = dfs(arrCopy, "", 0, maxLen, mem);
  return maxLen;  
};

function dfs(arr:string[], path:string, i:number, maxLen:number, mem:Record<string,number>) {
    if (mem[path]) return mem[path];
    let pathIsUnique = isUnique(path);
    if (pathIsUnique) {
        maxLen = Math.max(path.length, maxLen);
    } 
    if (i === arr.length || !pathIsUnique) {
        mem[path] = maxLen;
        return maxLen;
    }
    for (let j = i; j < arr.length; j++) {
        maxLen = dfs(arr, path + arr[j], j + 1, maxLen, mem);
    }


    mem[path] = maxLen;
    return maxLen;
}

function isUnique(str:string) {
    const map = {}
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) return false;
        map[str[i]] = 1;
    }
    
    return true;
}
