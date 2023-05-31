interface Trip {
  stationName: string;
  t: number;
}

interface AvgData {
  sum: number;
  count: number;
}
class UndergroundSystem {
    avg: Map<string,AvgData>;
    customer:Map<number,Trip>;
    constructor() {
        this.avg = new Map();
        this.customer = new Map();
    }

    checkIn(id: number, stationName: string, t: number): void {
        this.customer.set(id,{stationName,t});
    }

    checkOut(id: number, stationName: string, t: number): void {
        const checkIn = this.customer.get(id);
        if (!checkIn) throw new Error("Customer didn't check in");
        const key = `${checkIn.stationName}-${stationName}`;
        const {sum, count} = this.avg.get(key) ?? {sum: 0, count: 0};
        this.avg.set(key, {sum: sum + (t - checkIn.t), count: count + 1})
    }

    getAverageTime(startStation: string, endStation: string): number {
        const {sum, count} = this.avg.get(`${startStation}-${endStation}`) ?? {sum:0, count:0};
        return sum/count;
    }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */