/*
 * Functions that perform number/math calculations
*/

import * as Sequence from './sequence'
import * as Mapper from './mapper'

/**
 * Returns a new array containing on the even numbers from the given array.
 */
export function evens(nums : Array<number>): Array<number> {
  return nums.filter((num) => num % 2 === 0);
}

/**
 * determine the Lowest Common Multiple (LCM) for a given set of numbers.
 * e.g. lowestCommonMultiple([45, 30]) -> 90
 *      lowestCommonMultiple([1, 2, 3, 4, 5, 6]) -> 60
 */
export function lowestCommonMultiple(numList: Array<number>): number {
  let maxPrimeFactorsCount: Map<number, number> = new Map<number, number>();

  numList.forEach((num) => {
    // get the count of prime factors (e.g. 12 -> {2: 2, 3: 1} )
    let primeFactorCount: Map<number, number> = Mapper.countItems(primeFactors(num));

    // compare the prime factor counts with existing, replace with highest count
    primeFactorCount.forEach((value, key) => {
      if (maxPrimeFactorsCount.has(key)) {
        maxPrimeFactorsCount.set(key, <number> Math.max(value, <number> maxPrimeFactorsCount.get(key)));
      } else {
        maxPrimeFactorsCount.set(key, value);
      }
    });
  });

  // now multipy up the prime factors by their max occurances
  let lcm: number = 1;
  maxPrimeFactorsCount.forEach((value, key) => lcm *= Math.pow(key, value));
  return lcm;
}

/**
 * Given an array of numbers, returns the max number.
 */
export function maxNum(numbers: Array<number>): number {
  if (numbers.length === 0) {
    throw new Error("[maxNum] invalid argument: array cannot be empty");
  }
  return numbers.reduce((max, num) => { return Math.max(max, num) }, Number.MIN_SAFE_INTEGER);
}

/**
 * returns an array of the number's prime factors
 * e.g. primeFactors(12) -> [2, 2, 3]
 *
 * the number should be a positive integer
 */
export function primeFactors(num: number): Array<number> {
  if (num < 0) {
    throw new Error("[primeFactors] invalid arg: num should be positive number");
  }
  if (num === 1 || num === 0) {
    return [];
  }
  let primesArr: Array<number> = Sequence.primesRange(1, num / 2);
  let primeFactorsArr: Array<number> = [];

  for (let i: number = 0; i < primesArr.length && num > 1; i++) {
    let currPrime: number = primesArr[i];
    while (num % currPrime == 0) {
      num /= currPrime;
      primeFactorsArr.push(currPrime);
    }
  }

  if (primeFactorsArr.length == 0) {
    primeFactorsArr.push(num);
  }

  return primeFactorsArr;
}

/**
 * Calculates the product from an array of numbers.
 *
 * @params {Array<number>}
 */
export function product(numbers: Array<number>): number {
  return numbers.reduce((product, num) => product *= num);
}

/**
 * Given an array of numbers and some size of a sub-slice, returns a new array containing
 * products of those subslices.
 *
 * This method takes advantage of being able to divide out / multiply in integers to
 * keep the number of operations to a minimum. A more general solution would be to loop
 * over the array, run slice(), and reduce() a product. But that has a guranteed N * M
 * operations where N is the size of the array and M is the size of the slice. In the case
 * of solution 8, this is an order of magnitude in savings (13x). That said, this solution is
 * N * M in the worst case: when the array is completely filled with zeroes. I could probably
 * solve that with an optimization, but I'm lazy.
 *
 * @param {Array<number>} numbers the numbers to get subslices from
 * @param {number} sizeOfSlice a number whose value is 0 <= X <= series.length
 */
export function productOfSubSlices(numbers: Array<number>, sizeOfSlice: number): Array<number> {
  // TODO: parameter checking

  // get the initial product
  let currentProduct = _productOfSlice(numbers, 0, sizeOfSlice);
  let products: Array<number> = [currentProduct];

 /*
  * the start/end indicies act as a sliding window over the numbers
  * [2, 3, 4, 5, 6]
  *  ^        ^      = currentProduct: 24
  * Divide 2 from 24, multiply in 5, increment
  * [2, 3, 4, 5, 6]
  *     ^        ^   = currentProduct: 60
  */
  let sliceStartIndex: number = 0;
  let sliceEndIndex: number = sizeOfSlice;
  while (sliceEndIndex < numbers.length) {
    // when start is zero, instead of dividing, rebuild the currentProduct
    if (numbers[sliceStartIndex] === 0) {
      sliceStartIndex++;
      currentProduct = _productOfSlice(numbers, sliceStartIndex, sizeOfSlice);
      sliceEndIndex++;
    } else {
      currentProduct /= numbers[sliceStartIndex++];
      currentProduct *= numbers[sliceEndIndex++];
    }
    products.push(currentProduct);
  }

  return products;
}

function _productOfSlice(numbers: Array<number>, index: number, sizeOfSlice: number): number {
  return product(numbers.slice(index, index + sizeOfSlice));
}

/**
 * A specific tuple containing three numbers.
 */
export type Triplet = [number, number, number];

/**
 * Given integers m and n, where m > n > 0, returns the Pythagorean Triplet as a tuple of
 * 3 numbers. Uses Euclid's formula, which can generate any triple. The formula will provide
 * a primitive triple if m and n are co-prime (their GCD is 1).
 *
 * @param {number} m positive number greater than n
 * @param {number} n positive number
 * @throws if parameters violate m > n > 0;
 */
export function pythagoreanTriplet(m: number, n: number): Triplet {
  if (n >= m) {
    throw new Error("[pythagoreanTriplet] invalid arg: n must be less than m");
  }
  if (m <= 0 || n <= 0) {
    throw new Error("[pythagoreanTriplet] invalid arg: parameters must be greater than 0");
  }
  return [
    (m**2 - n**2),
    (2 * m * n),
    (m**2 + n**2)
  ];
}

/**
 * Calculates the sum from an array of numbers.
 *
 * @params {Array<number>}
 */
export function sum(nums : Array<number>): number {
  return nums.reduce((sum, num) => sum + num);
}
