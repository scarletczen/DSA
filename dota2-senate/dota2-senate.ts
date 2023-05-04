// STACK SOLUTION Time O(N) Space O(N)
function predictPartyVictory(senate: string): string {
    //The key for this question is the one who can vote can vote out the the one will vote
    //Example
    //RDD => R voute out D, senate became RD, and D vote out R winner is D
    //in stack and senate we can see:
    //stack = [] senate = RDD
    //stack = [R] senate = DD
    //stack = [] senate = DR
    //stack = [D] senate = R
    //then D vode out R winner is D

    //when stack is empty we push senate[i]
    //when stack.lastOne == senate[i] we push senate[i]
    //when stack.lastOne != senate[i] we pop stack.lastOne push into senate
    //Finally we check who is left in stack then that is winner

    let senateArr = senate.split('')
    let stack = []
    let win = null

    for(let i = 0; i < senateArr.length; i++){
        if(!stack[stack.length - 1]){
            stack.push(senateArr[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] === senateArr[i]){
            stack.push(senateArr[i])
        }else if(stack[stack.length - 1] && stack[stack.length - 1] !== senateArr[i]){
            senateArr.push(stack.pop())
        }
    }

    win = stack[0]
    if(win === 'R') return 'Radiant'
    if(win === 'D') return 'Dire'
};