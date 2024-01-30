class MyQueue {
    private S1;
    private S2;
    
    constructor() {
        this.S1 = [];
        this.S2 = [];
    }

    push(x: number): void {
        this.S1.push(x);
    }

    pop(): number {
        if(!this.S2.length){
            while(this.S1.length){
                this.S2.push(this.S1.pop());
            }
        }
        
        return this.S2.pop();
    }

    peek(): number {
        if(!this.S2.length){
            while(this.S1.length){
                this.S2.push(this.S1.pop());
            }
        }
        
        return this.S2[this.S2.length -1];
    }

    empty(): boolean {
        if(!this.S1.length && !this.S2.length){
            return true;
        }
        return false;
    }
}