import { printBenchmark } from "../lib/benchmark";
import * as Numbers from "../lib/numbers";
import * as Strings from "../lib/strings";

/**
 * What is the sum of the number of letters used for all written
 * numbers from 1-1000 (inclusive). Do not count spaces or hyphens.
 *
 * e.g. 342 => "three hundred and forty-two"
 *
 * Runs in ~5ms
 */
function numberLetterCounts(): number {
  let count = 0;
  const letterRegex = new RegExp("[a-zA-Z]");

  for (let i = 1; i <= 1000; i++) {
    count += Strings.count(Numbers.toEnglish(i), letterRegex);
  }

  return count;
}

printBenchmark(numberLetterCounts);
