// Time O(m * n) Space O(1)
function numberOfBeams(bank: string[]): number {
  let prevCount = 0, totalCount = 0;
  for (const floor of bank) {
      const count = floor.split('').reduce((acc,c)=> acc + +c, 0);
      if (count > 0){
          totalCount += prevCount * count;
          prevCount = count;
      }
  }  
  return totalCount
};