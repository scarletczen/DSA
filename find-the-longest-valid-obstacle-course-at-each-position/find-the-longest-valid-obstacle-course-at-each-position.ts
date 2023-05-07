// Longest Increasing Subsequence + Binary Search Solution
function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    let n = obstacles.length;
    let lis:number[] = [];
    let res:number[] = new Array(n).fill(0);
    
    for (let i = 0; i<n; i++)
    {
        if(lis.length > 0 && obstacles[i] >= lis[lis.length-1])
        {
            lis.push(obstacles[i]);
            res[i] = lis.length;
        }
        else
        {
            // find the upper bound
            let l:number = 0;
            let r:number = lis.length;
            while(l<=r)
            {
                let mid = Math.floor((l+r)/2);
                if(lis[mid]<=obstacles[i])
                {
                    l = mid+1;
                }
                else
                {
                    r = mid-1;
                }
            }
            lis[l] = obstacles[i];
            res[i] = l+1;
        }
    }
    return res;
};