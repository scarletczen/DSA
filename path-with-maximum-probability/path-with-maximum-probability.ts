function maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
    const graph = new Map<number, Array<[number, number]>>();
    for(let i = 0 ; i < edges.length ; i++){
        const [src, dest] = edges[i];
        const prob = succProb[i];
        if(!graph.has(src))
            graph.set(src, new Array<[number, number]>());
        if(!graph.has(dest))
            graph.set(dest, new Array<[number, number]>());
        
        graph.get(src).push([dest, prob]);
        graph.get(dest).push([src, prob]);
    }
    const heap = new MaxPriorityQueue({ priority: comparator }); 
    heap.enqueue([start, 1]);
    const visited = new Set<number>();
    
    while(!heap.isEmpty()){
        const [current, prob] = heap.dequeue().element;
        
        if(current === end) return prob;
        if(!graph.has(current)) return 0;
        
        if(visited.has(current)) continue;
        visited.add(current);
        for(const [next, nextProb] of graph.get(current)){
            const totalNextProb = nextProb * prob;
            if(!visited.has(next))
                heap.enqueue([next, totalNextProb]);
        }
    }
    return 0;
};


function comparator([, weight]:[number, number]): number {
    return weight;
}