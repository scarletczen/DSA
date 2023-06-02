function maximumDetonation(bombs: number[][]): number {
    const neighbours: Map<number, number[]> = new Map();
    for (let i = 0; i < bombs.length; i++) {
        const x1 = bombs[i][0];
        const y1 = bombs[i][1];
        const r = bombs[i][2];
        for (let j = 0; j < bombs.length; j++) {
            if (i !== j) {
                const x2 = bombs[j][0];
                const y2 = bombs[j][1];
                if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= r ** 2) {
                    if (neighbours.has(i)) {
                        neighbours.get(i).push(j);
                        neighbours.set(i, neighbours.get(i))
                    } else {
                        neighbours.set(i, [j]);
                    }
                }
            }
        }
    }
	let max = 0;
	for(let i = 0; i < bombs.length; i++) {
		const visited: Set<number> = new Set();
		const q: number[] = [];
		q.push(i);
		visited.add(i);
		while (q.length) {
            const first = q.shift();
            if (neighbours.has(first)) {
                for (let b of neighbours.get(first)) {
                    if (!visited.has(b)) {
                        visited.add(b);
                        q.push(b);
                    }
                }    
            }
		}
    	if (visited.size === bombs.length) {
            return visited.size;
        }
		max = Math.max(max, visited.size);
	}
	return max;
};