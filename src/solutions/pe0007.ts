import { printBenchmark } from '../lib/benchmark'
import * as Sequence from '../lib/sequence'

// What is the 10001st prime number?
// Runs in ~8ms
function get10001stPrime() {
  return Sequence.primes(10001)[10000];
}

printBenchmark(get10001stPrime);
