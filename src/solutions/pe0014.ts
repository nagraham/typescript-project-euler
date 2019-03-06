import { printBenchmark } from "../lib/benchmark";
import * as Sequence from "../lib/sequence";

/**
 * The following iterative sequence is defined for the set of positive integers:
 *   n → n/2 (n is even)
 *   n → 3n + 1 (n is odd)
 *   e.g. 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * Which starting number, under one million, produces the longest chain?
 *
 * NOTES:
 * - If we wanted to optimize only on length, if current num is log2(num) is an integer, you could
 *   just add that integer + 1 to the length, and then return the length (b/c it's apparent
 *   the only way the sequence can wind down to 1 is when it reaches some power of 2).
 * - Optmize: store previous sequences values in a cache; heavy on memory, but might easy the computation
 * - b/c we have to calculate all sequences (which is computationally heavy), why not attempt
 *   to multi-thread it with the "Worker" library?
 *
 * Runs in ~6500ms (unoptimized; compared to my Java solution, which runs in 2000ms)
 */
function longestCollatzSequence(): [number, number] {
  let max: number = -1;
  let numberWithLongestSequence: number = -1;

  for (let i: number = 2; i <= 1000000; i++) {
    const len: number = Sequence.collatz(i).length;
    if (max < len) {
      max = len;
      numberWithLongestSequence = i;
    }
  }

  return [numberWithLongestSequence, max];
}

printBenchmark(longestCollatzSequence);
