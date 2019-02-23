
import * as Sequences from '../lib/sequences'
import { printBenchmark } from "../lib/benchmark"

function largestPrimeFactor(num: number): number {
  let optimizedThreshold: number = Math.floor(Math.sqrt(num));
  // no idea why I need to cast; can't find answer
  // maybe https://stackoverflow.com/questions/40674976/array-pop-returns-undefined-for-non-emty-array
  return <number> Sequences.primes(0, optimizedThreshold)
    .filter(prime => num % prime == 0)
    .pop();
}

printBenchmark(() => largestPrimeFactor(600851475143));
