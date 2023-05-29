class ParkingSystem {
    big:number;
    medium:number;
    small:number;
    slots:number[];
    constructor(big: number, medium: number, small: number) {
        this.big = big;
        this.medium = medium;
        this.small = small;
        this.slots = [big, medium, small];
    }

    addCar(carType: number): boolean {
        if (this.slots[carType-1] > 0){
            this.slots[carType-1] -= 1;
            return true;
        } else return false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */