// Sliding Window Solution Time O(N) Space O(1)
function maxVowels(s: string, k: number): number {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    let start = 0; 
    let count = 0; 

    for (let end = 0; end < s.length; end++) {
	   
        if (vowels.has(s[end])) {
            count +=1;
        }

        if (end - start + 1 > k) {
            if(vowels.has(s[start])) {
                count -=1;
            }
            start +=1;
        }

        maxCount = Math.max(maxCount, count)
        if (maxCount == k) return maxCount;
    }
    return maxCount;
};