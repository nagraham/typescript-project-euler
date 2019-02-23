import * as Sequences from './sequences'
import * as Mapper from './mapper'

// returns an array of even numbers
export function evens(nums : Array<number>): Array<number> {
  return nums.filter((num) => num % 2 === 0);
}

// determine the Lowest Common Multiple (LCM) for a given set of numbers.
// e.g. lowestCommonMultiple([45, 30]) -> 90
//      lowestCommonMultiple([1, 2, 3, 4, 5, 6]) -> 60
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

// returns an array of the number's prime factors
// e.g. primeFactors(12) -> [2, 2, 3]
//
// the number should be a positive integer
export function primeFactors(num: number): Array<number> {
  if (num < 0) {
    throw new Error("[primeFactors] invalid arg: num should be positive number");
  }
  if (num === 1 || num === 0) {
    return [];
  }
  let primesArr: Array<number> = Sequences.primes(1, num / 2);
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

// returns the sum of an array of numbers
export function sum(nums : Array<number>): number {
  return nums.reduce((sum, num) => sum + num);
}
