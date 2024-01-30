// Stack Solution Time O(2*N) Space O(N)
function evalRPN(tokens: string[]): number {
    // Instantiate the stack
    const stack:number[]=[]; 
    tokens.forEach((token)=>{
        if(token === "+"){
            stack.push(Number(stack.pop())+Number(stack.pop()));
        }
        // Order matters
        else if(token === "-"){
            const a = Number(stack.pop());
            const b = Number(stack.pop());
            stack.push(b-a);
        }
        // Order matters, trunc returns integer part of number
        else if(token === "/"){
            const a = Number(stack.pop());
            const b = Number(stack.pop());
            stack.push(Math.trunc(b/a));
        }
        else if(token === "*"){
            stack.push(Number(stack.pop())*Number(stack.pop()));
        }
        // If it is a number, push it to the stack
        else{
            stack.push(Number(token));
        }
    })
    // In the end, only the resulting number will remain in the stack
    return stack[0];
};