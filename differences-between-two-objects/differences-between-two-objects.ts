function objDiff(obj1: any, obj2: any): Record<any,any> {
   if (obj1 === obj2) {
        return {};
    }

    if (obj1 === null || obj2 === null) {
        return [obj1, obj2];
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return [obj1, obj2];
    }

    if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        return [obj1, obj2];
    }

    const result: { [key: string]: any } = {};
    for (const key in obj1) {
        if (key in obj2) {
            const diff = objDiff(obj1[key], obj2[key]);
            if (Object.keys(diff).length) {
                result[key] = diff;
            }
        }
    }

    return result;
};