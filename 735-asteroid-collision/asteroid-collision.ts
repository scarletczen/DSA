function asteroidCollision(asteroids:number[]) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const curr = asteroids[i];

    if (curr > 0) {
      stack.push(curr);
    } else {
      // if stack not empty
      // AND if top is positive
      // AND if top is smaller than curr
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(curr)
      ) {
        stack.pop();
      }

      // if stack not empty
      // AND if top has the same size as curr
      if (stack.length && stack[stack.length - 1] === Math.abs(curr)) {
        stack.pop();
      }
      // if stack is empty
      // OR top is negative
      else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(curr);
      }
    }
  }

  return stack;
};