
import { printBenchmark } from "../lib/benchmark";
import * as Sequence from "../lib/sequence";

// Runs in ~60ms
function largestPrimeFactor(num: number): number {
  const optimizedThreshold: number = Math.floor(Math.sqrt(num));
  // no idea why I need to cast; can't find answer
  // maybe https://stackoverflow.com/questions/40674976/array-pop-returns-undefined-for-non-emty-array
  return Sequence.primesRange(0, optimizedThreshold)
    .filter((prime) => num % prime === 0)
    .pop() as number;
}

printBenchmark(() => largestPrimeFactor(600851475143));
