function countRoutes(locations: number[], start: number, finish: number, fuel: number): number {
    const mod = 10**9+7;
    const memo: number[][] = []
    for(let i=0; i<locations.length; i++){
        memo.push([]);
        for(let j=0; j<=fuel; j++){
            memo[i].push(-1);
        }
    }

    function travel(currentCity: number, remainingFuel: number): number{
        if(memo[currentCity][remainingFuel]!==-1){
            return memo[currentCity][remainingFuel]
        }

        let pathCount = 0;        
        if(currentCity===finish){
            pathCount = 1;
        }
        for(let nextCity=0; nextCity<locations.length; nextCity++){
            if(nextCity!==currentCity){
                const cost = Math.abs(locations[nextCity]-locations[currentCity]);
                if(remainingFuel>=cost){
                    pathCount = (pathCount+travel(nextCity, remainingFuel-cost))%mod;
                }
            }
        }
        
        memo[currentCity][remainingFuel] = pathCount
        return pathCount
    }    

    return travel(start, fuel);
};