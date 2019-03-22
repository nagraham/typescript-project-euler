import { printBenchmark } from "../lib/benchmark";
import { BigInt } from "../lib/bigint";
import * as Numbers from "../lib/numbers";

/**
 * 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 21000?
 *
 * I have ts-node version 8.0.2, which doesn't have BigInt support (only recently added
 * to NodeJS). So instead I created my own simplistic BigInt class.
 *
 * Runs in ~30ms
 */
function powerDigitSum(n: number): number {
  let bigPower: BigInt = BigInt.valueOf(1);

  for (let i: number = 0; i < n; i++) {
    bigPower = bigPower.multiply(BigInt.valueOf(2));
  }

  return Numbers.sum(bigPower.toDigits());
}

printBenchmark(() => powerDigitSum(1000));
