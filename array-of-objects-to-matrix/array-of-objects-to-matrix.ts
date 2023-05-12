function getKeyValue(obj, key = '', res = []) {
    if (typeof obj === 'number' || typeof obj === 'string' || typeof obj === 'boolean' || obj === null) {
        return { [key]: obj };
    }

    for (const [k, v] of Object.entries(obj)) {
        const composedKey = key === '' ? k : key + '.' + k;
        res.push(getKeyValue(v, composedKey));
    }

    return res.flat();
}

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
    const keyValuesArray = arr.map((e) => getKeyValue(e)); 
    const allKeys = [...new Set(keyValuesArray.flat().map((obj) => Object.keys(obj)[0]))].sort();

    const res = [allKeys];

    for (const row of keyValuesArray) {
        res.push([]);
        for (const key of allKeys) {
            const v = row.find((r) => r.hasOwnProperty(key))?.[key];
            res.at(-1).push(v === undefined ? '' : v);
        }
    }

    return res;
};
