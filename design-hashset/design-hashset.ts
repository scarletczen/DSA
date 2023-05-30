class MyHashSet {
    value:number[];
    constructor() {
        this.value = [];
    }

    add(key: number): void {
        if(!this.value.includes(key)){
            this.value.push(key)
        }
    }

    remove(key: number): void {
        const index = this.value.indexOf(key);
       if(index > -1){
           this.value.splice(index,1);
       }
    }

    contains(key: number): boolean {
        return this.value.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */