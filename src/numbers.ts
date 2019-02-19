
// returns an array of even numbers
export function evens(nums : Array<number>): Array<number> {
  return nums.filter((num) => num % 2 === 0);
}

// returns the sum of an array of numbers
export function sum(nums : Array<number>): number {
  return nums.reduce((sum, num) => sum + num);
}
