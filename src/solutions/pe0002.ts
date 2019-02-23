
import * as Numbers from '../lib/numbers'
import * as Sequences from '../lib/sequences'
import { printBenchmark } from "../lib/benchmark"

function sumOfEvenFibonacciNumbers(): number {
  return Numbers.sum(Numbers.evens(Sequences.fibonacci(1, 4000000)));
}

printBenchmark(sumOfEvenFibonacciNumbers);
