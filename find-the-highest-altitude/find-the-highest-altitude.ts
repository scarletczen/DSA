function largestAltitude(gain: number[]): number {
    let maxAltitude = 0;
    let temp = 0;
    for (let x of gain){
        temp += x;
        maxAltitude = Math.max(maxAltitude, temp);
    }

    return maxAltitude
};