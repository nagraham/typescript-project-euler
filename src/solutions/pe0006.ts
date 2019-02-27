import { printBenchmark } from "../lib/benchmark";
import * as Numbers from "../lib/numbers";
import * as Sequence from "../lib/sequence";

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.
// Runs in ~1ms
function sumSquareDifference() {
  const range: number[] = Sequence.range(1, 100);
  const squareOfSum: number = Math.pow(Numbers.sum(range), 2);
  const sumOfSquares: number = Numbers.sum(range.map((num) => Math.pow(num, 2)));
  return squareOfSum - sumOfSquares;
}

printBenchmark(sumSquareDifference);
