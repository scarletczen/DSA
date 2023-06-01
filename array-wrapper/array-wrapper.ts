class ArrayWrapper {
	value:number[];
    constructor(nums: number[]) {
        this.value = nums;
    }

	valueOf() {
        return this.value.reduce((sum, num) => sum + num, 0);
    }

	toString() {
        return JSON.stringify(this.value);
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */