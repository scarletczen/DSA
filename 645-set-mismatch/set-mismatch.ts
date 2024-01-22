// Time O(N) Space O(1) using arithmetic sum
function findErrorNums(nums: number[]): number[] {
  let arrayLength = nums.length;
  let sum = (arrayLength*(arrayLength+1))/2;
  let s=0, repeated=0;
  let obj = {};
  for(let i of nums){
      if(obj[i]){
          repeated = i;
      }else{
          obj[i] = true;
          s+=i;
      }
  }
  return [repeated, sum-s];
};