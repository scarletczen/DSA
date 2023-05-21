// Two Pointers Solution
function makeSmallestPalindrome(s: string): string {
  const chars: string[] = s.split('');
  let start: number = 0;
  let end: number = chars.length - 1;

  while (start <= (chars.length/2)) {
   chars[start] = chars[start] < chars[end] ? chars[start]:chars[end];
   chars[end] = chars[start];
    start++;
    end--;
  }

  return chars.join('');
};