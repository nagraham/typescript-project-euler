/*
 * Functions that return numerical sequences based on an algorithm or special property (fibonacci, primes, sums)
*/

// Returns an sequence of fibonacci numbers, calculated from start to end.
export function fibonacci(start: number, end: number): Array<number> {
  let a: number = 0;
  let b: number = 1;

  let sequence: Array<number> = [];
  while (a <= end) {
    if (a >= start) {
      sequence.push(a);
    }
    let temp: number = b;
    b = a + b;
    a = temp;
  }

  return sequence;
}

// a function that retrieves the number of primes specified
export function primes(numOfPrimes: number): Array<number> {
  if (numOfPrimes <= 0) { return []; }

  let primesSequence: Array<number> = [];
  primesSequence.push(2);

  let currNumber: number = 3;
  while (primesSequence.length < numOfPrimes) {
    if (_isPrimeNumber(currNumber, primesSequence)) {
      primesSequence.push(currNumber);
    }
    currNumber += 2; // no need to check even #'s
  }

  return primesSequence;
}

// Returns a sequence of prime numbers, from start to end.
// Start should be > 0; start should be <= end
export function primesRange(start: number, end: number): Array<number> {
  if (start < 0 || end < 0) {
    throw new Error("[primes] invalid arg: arguments must be > 0");
  }

  if (start > end) {
    throw new Error("[primes] invalid arg: start must be <= end");
  }

  let allPrimes: Array<number> = [2];
  let sequence: Array<number> = [];
  if (start <= 2) {
    sequence.push(2);
  }

  for (let candidateNum: number = 3; candidateNum <= end; candidateNum += 2) {
    if (_isPrimeNumber(candidateNum, allPrimes)) {
      allPrimes.push(candidateNum);
      if (candidateNum >= start) {
        sequence.push(candidateNum);
      }
    }
  }

  return sequence;
}

function _isPrimeNumber(num: number, primes: Array<number>): boolean {
  let currentPrime: number = 0;
  let maxNumToCheck: number = Math.sqrt(num);
  for (let i: number = 0; currentPrime < maxNumToCheck && i < primes.length; i++) {
    currentPrime = primes[i];
    if (num % currentPrime === 0) {
      return false;
    }
  }
  return true;
}

// Returns a range of numbers from start to end. Inclusive is the default setting,
// but can be made exclusive with an optional boolean of false.
//
// e.g. range(1, 10) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// e.g. range(1, 10, false) -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
export function range(start: number, end: number, inclusive = true): Array<number> {
  if (start > end) {
    throw new Error("[range] invalid arg: end must be greater than start");
  }
  let range: Array<number> = [];
  for (let i: number = start; i < end; i++) {
    range.push(i);
  }
  if (inclusive) { range.push(end); }
  return range;
}
