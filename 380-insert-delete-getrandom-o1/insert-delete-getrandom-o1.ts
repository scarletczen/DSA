class RandomizedSet {
    map: Map<any,any>
    arr: any[]
    constructor() {
        this.map = new Map();
        this.arr = []
    }

    insert(val: number): boolean {
        if(this.map.has(val)) return false;
        this.map.set(val, this.arr.length);
        this.arr.push(val);
        return true;
    }

    remove(val: number): boolean {
     if(!this.map.has(val)) return false;
     const valIdx = this.map.get(val);
     const lastIdx = this.arr.length -1;
     const lastNum = this.arr[lastIdx];
     [this.arr[valIdx], this.arr[lastIdx]] = [this.arr[lastIdx], this.arr[valIdx]];
     this.arr.pop();
     this.map.set(lastNum, valIdx);
     this.map.delete(val);
     return true;   
    }

    getRandom(): number {
     const randIdx = Math.floor(Math.random() * this.arr.length);
     return this.arr[randIdx];   
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */