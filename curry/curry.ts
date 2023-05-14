function curry(fn: Function): Function {
    let argList = [];
  return function curried(...args) {
    argList.push(...args);
    if (argList.length < fn.length) return curried;
    return fn(...argList);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */