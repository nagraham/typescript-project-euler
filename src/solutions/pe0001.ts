
import * as numbers from '../lib/numbers'
import { printBenchmark } from "../lib/benchmark"

// solve project euler 1
function multiplesOf3Or5(): number {
  let sum : number = 0;
  for (let i : number = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0)  {
      sum += i;
    }
  }
  return sum;
}

printBenchmark(multiplesOf3Or5);
