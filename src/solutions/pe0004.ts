import { printBenchmark } from "../lib/benchmark";
import { isPalindrome } from "../lib/strings";

// the largest palindrome made from the product of two 3-digit numbers
// Runs in ~80ms
function largestPalindromeProduct() {
  let max: number = -1;
  for (let i: number = 999; i > 0; i--) {
    for (let j: number = 999; j >= i; j--) {
      const product: number = i * j;
      if (isPalindrome(product.toString()) && product > max) {
        max = product;
      }
    }
  }
  return max;
}

printBenchmark(largestPalindromeProduct);
