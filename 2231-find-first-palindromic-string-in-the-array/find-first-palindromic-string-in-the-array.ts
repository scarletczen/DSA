// Two Pointers Approach
function firstPalindrome(words: string[]): string {
    for(const word of words){
        if(isPalindrome(word)){
            return word
        }
    }
    return "";
};

function isPalindrome(word:string){
    let start = 0;
    let end = word.length - 1;
    while(start<end){
        if(word[start] !== word[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}