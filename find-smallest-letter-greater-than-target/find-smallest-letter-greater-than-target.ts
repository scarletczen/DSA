// Binary Search Solution
function nextGreatestLetter(letters: string[], target: string): string {
    if(letters.length === 1){
        return letters[0];
    }
    let left = 0;
    let right = letters.length; 

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (left === letters.length){
        return letters[0];
    } else {
        return letters[left];
    }
};