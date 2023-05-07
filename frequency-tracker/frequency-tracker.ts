// Two Hashmaps Solution 
class FrequencyTracker {
    numberCount:Map<number,number>
    freqCount:Map<number,number>;
    
    constructor() {
        this.freqCount = new Map();
        this.numberCount = new Map();
    }
   
    add(number: number): void {
        if(this.numberCount.has(number)){
            this.freqCount.set(this.numberCount.get(number),(this.freqCount.get(this.numberCount.get(number)) || 0) - 1);
        }
        this.numberCount.set(number,(this.numberCount.get(number)||0)+1);
        this.freqCount.set(this.numberCount.get(number),(this.freqCount.get(this.numberCount.get(number)) || 0) + 1);
    }

    deleteOne(number: number): void {
       if(this.numberCount.has(number) && this.numberCount.get(number) > 0){
            this.freqCount.set(this.numberCount.get(number),(this.freqCount.get(this.numberCount.get(number)) || 0) - 1);
            this.numberCount.set(number,(this.numberCount.get(number)||0)-1);
            this.freqCount.set(this.numberCount.get(number),(this.freqCount.get(this.numberCount.get(number)) || 0) + 1);
       }
    }

    hasFrequency(frequency: number): boolean {
        return (this.freqCount.get(frequency) > 0);
    }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */