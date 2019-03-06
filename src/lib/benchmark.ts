/**
 * Executes the provided callback function, and prints the result
 * and speed (in milliseconds) to the console.
 *
 * PRO TIP: If the function you want to benchmark has arguments, simply
 * wrap it in a function e.g. printBenchmark(() => myFunction("foo", bar, 42));
 *
 * @param {callback} Function the function to benchmark
 */
export function printBenchmark(callback: () => any): void {
  const start: number = Date.now();
  const result: any = callback();
  const end: number = Date.now();

  /* tslint:disable */
  console.log(`RESULT: ${result}`);
  console.log(`SPEED: ${end - start}ms`);
  /* tslint:enable */
}
