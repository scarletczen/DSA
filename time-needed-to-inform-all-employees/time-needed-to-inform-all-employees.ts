function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    if (manager.length === 1) {
        return informTime[headID]    
    }
    
    let map = new Map<number, number[]>();
    for (let i = 0; i < manager.length; i++) {
        if (i === headID) {
            continue;
        }
        const key = manager[i];
        if (!map.has(key)) {
            map.set(key, [i]);    
        } else {
            map.get(key).push(i);
        }
    }


    const dfs = (employeeId: number): number => {
        const subordinates = map.get(employeeId);
        if (!subordinates) {
            return informTime[employeeId];
        }
    
        const delays = subordinates.map(item => dfs(item));
        
        return Math.max(...delays) + informTime[employeeId];
    }

    return dfs(headID);
};