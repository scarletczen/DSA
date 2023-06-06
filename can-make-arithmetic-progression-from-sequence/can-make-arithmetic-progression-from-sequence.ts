function canMakeArithmeticProgression(arr: number[]): boolean {
    const max = Math.max(...arr);
    let current = Math.min(...arr);
    const gap = (max - current) / (arr.length - 1);
    const set: Set<number> = new Set(arr);
    
    while (current < max) {
        current += gap;
        if (!set.has(current)) return false;
    }
    return true;
};