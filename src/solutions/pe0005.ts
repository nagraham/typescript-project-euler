import { printBenchmark } from "../lib/benchmark";
import { lowestCommonMultiple } from "../lib/numbers";
import { range } from "../lib/sequence";

// What is the smallest positive number that is evenly divisible by all
// of the numbers from 1 to 20?
//
// This is a "least common multiple" problem: http://www.math.com/school/subject1/lessons/S1U3L3DP.html
//
// Runs in ~1ms
function smallestMultiple(): number {
  return lowestCommonMultiple(range(1, 20));
}

printBenchmark(smallestMultiple);
