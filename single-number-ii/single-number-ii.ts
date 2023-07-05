function singleNumber(nums: number[]): number {
    let map=new Map();
   for(var i in nums){
       if(!map.has(nums[i]))
        map.set(nums[i],1);
       else
        map.set(nums[i],map.get(nums[i])+1);
       
   }
   return [...map].find(([key, val]) => val == 1)[0];
};