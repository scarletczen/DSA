function minFlips(a: number, b: number, c: number): number {
    let ret = 0;
  while (a > 0 || b > 0 || c > 0) {
    if (((a & 1) | (b & 1)) !== (c & 1)) {
      ret += (a & 1) === 1 && (b & 1) === 1 ? 2 : 1;
    }
    a >>>= 1;
    b >>>= 1;
    c >>>= 1;
  }
  return ret;
};