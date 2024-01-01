function findContentChildren(g: number[], s: number[]): number {
  let contentChildren = 0;
    
  const childrenGreed = [...g].sort((a,b)=>a-b);
  const cookieSizes = [...s].sort((a,b)=>a-b);

  for (const cookie of cookieSizes) {
      if(cookie >= childrenGreed[contentChildren]) contentChildren ++;
  }

  return contentChildren;
};