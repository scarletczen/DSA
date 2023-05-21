// Stack Solution
function minLength(s: string): number {
    const stack = [];
    for (const char of s) {
        if (stack.length
            && (char === 'B' && stack[stack.length - 1] === 'A'
            || char === 'D' && stack[stack.length - 1] === 'C')
        ) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
};