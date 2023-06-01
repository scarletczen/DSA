class ArrayWrapper {
	value:number[];
    stringified: string;
    constructor(nums: number[]) {
        this.value = nums;
        this.stringified = JSON.stringify(nums);
    }

	valueOf() {
        return this.value.reduce((sum, num) => sum + num, 0);
    }

	toString() {
        return this.stringified;
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */