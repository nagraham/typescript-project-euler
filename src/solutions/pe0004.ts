
import { isPalindrome } from "../strings"
import { printBenchmark } from "../benchmark"

// the largest palindrome made from the product of two 3-digit numbers
function largestPalindromeProduct() {
  let max: number = -1;
  for (let i: number = 999; i > 0; i--) {
    for (let j: number = 999; j >= i; j--) {
      let product: number = i * j;
      if (isPalindrome(product.toString()) && product > max) {
        max = product;
      }
    }
  }
  return max;
}

printBenchmark(largestPalindromeProduct);
