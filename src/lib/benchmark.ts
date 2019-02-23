// Executes the provided callback function, and prints the result
// and speed (in milliseconds) to the console.
//
// PRO TIP: If the function you want to benchmark has arguments, simply
// wrap it in a function e.g. printBenchmark(() => myFunction("foo", bar, 42));
export function printBenchmark(callback: Function): void {
  let start: number = Date.now();
  let result: any = callback();
  let end: number = Date.now();

  console.log(`RESULT: ${result}`)
  console.log(`SPEED: ${end - start}ms`);
}
