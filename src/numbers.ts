
export function sum(...nums : Array<number>): number {
  return nums.reduce((sum, num) => sum + num);
}
