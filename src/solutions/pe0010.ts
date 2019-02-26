import { printBenchmark } from "../lib/benchmark";
import { sum } from "../lib/numbers";
import { primesRange } from "../lib/sequence";

/**
 * Find the sum of all the primes below two million.
 *
 * Runs in ~450ms (but completely re-uses library components, which makes me happy)
 */
function summationOfPrimes(max: number): number {
  return sum(primesRange(1, max));
}

printBenchmark(() => summationOfPrimes(2000000));
