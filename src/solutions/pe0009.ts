import { printBenchmark } from "../lib/benchmark";
import * as Numbers from "../lib/numbers";

/**
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *   a^2 + b^2 = c^2
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc
 *
 * Runs in ~3ms
 */
function specialPythagoreanTriplet(): [number, Numbers.Triplet] {
  for (let m: number = 2; m <= 100; m++) {
    for (let n: number = 1; n < m; n++) {
      const triplet: Numbers.Triplet = Numbers.pythagoreanTriplet(m, n);
      if (Numbers.sum(triplet) === 1000) {
        return [Numbers.product(triplet), triplet];
      }
    }
  }
  return [-1, [-1, -1, -1]]; // something broke
}

printBenchmark(specialPythagoreanTriplet);
