
// Returns an sequence of fibonacci numbers, calculated from start to end.
export function fibonacci(start: number, end: number): Array<number> {
  let a: number = 0;
  let b: number = 1;

  let sequence: Array<number> = [];
  while (a <= end) {
    if (a >= start) {
      sequence.push(a);
    }
    let temp: number = b;
    b = a + b;
    a = temp;
  }

  return sequence;
}
