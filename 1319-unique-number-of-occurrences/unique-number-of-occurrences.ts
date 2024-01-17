function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();
  arr.forEach((val)=>map.set(val, (map.get(val)||0)+1));
  return new Set(map.values()).size === map.size
};