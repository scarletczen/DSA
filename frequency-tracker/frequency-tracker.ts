class FrequencyTracker {
    value:number[];
    numberCount:Map<number,number>
    freqCount:Map<number,number>;
    
    constructor() {
        this.value = [];
        this.freqCount = new Map();
        this.numberCount = new Map();
    }
   
    add(number: number): void {
         this.numberCount[number] = ++this.numberCount[number] || 1;
    if (this.numberCount[number] > 1) {
        this.freqCount[this.numberCount[number] - 1].delete(number);
    }
    if (!this.freqCount[this.numberCount[number]]) {
        this.freqCount[this.numberCount[number]] = new Set();
    }
    this.freqCount[this.numberCount[number]].add(number);
    }

    deleteOne(number: number): void {
       if (this.numberCount[number]) {
        this.freqCount[this.numberCount[number]].delete(number);
        this.numberCount[number]--;
        if (this.numberCount[number]) {
            this.freqCount[this.numberCount[number]].add(number);
        }
    }
       
    }
    
    hasFrequency(frequency: number): boolean {
    return !!this.freqCount[frequency]?.size;
    }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */