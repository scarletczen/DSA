// Custom MaxHeap Implementation
class MaxHeap {
  compareFn;
  heap;

  constructor(compareFn) {
    this.compareFn = compareFn;
    this.heap = new Array();
  }
  
  insert(val) {
    this.heap.push(val);
    this.heap.sort(this.compareFn);
  }
  
  extract = () => this.heap.shift();
  peek = () => this.heap[0];
  size = () => this.heap.length;
}

function compareFn(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  if (a === b) return 0;
}

function lastStoneWeight(stones: number[]): number {
  let heap = new MaxHeap(compareFn);

  for (let i = 0; i < stones.length; i++) {
    heap.insert(stones[i]);
  }

  while (heap.size() > 1) {
    let first = heap.peek();
    heap.extract();
    let second = heap.peek();
    heap.extract();
    if (first === second) {
      continue;
    }
    else {
      let left = first - second;
      heap.insert(left);
    }
  }

  return heap.peek() ? heap.peek() : 0;
};