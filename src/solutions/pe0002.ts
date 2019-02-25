
import * as Numbers from '../lib/numbers'
import * as Sequence from '../lib/sequence'
import { printBenchmark } from "../lib/benchmark"

// Runs in > 1ms
function sumOfEvenFibonacciNumbers(): number {
  return Numbers.sum(Numbers.evens(Sequence.fibonacci(1, 4000000)));
}

printBenchmark(sumOfEvenFibonacciNumbers);
