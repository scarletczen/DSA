function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    const prototype = classFunction?.prototype;
        
        while (obj !== null && obj !== undefined) {
            obj = Object.getPrototypeOf(obj);
            if (obj === prototype) return true;
        }
        
        return false;

};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */