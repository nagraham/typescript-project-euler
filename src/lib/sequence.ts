/*
 * Functions that return numerical sequences based on an algorithm or special property (fibonacci, primes, sums)
*/

/**
 * Returns a Collatz Sequence based on the given "seed" value.
 *
 * The Collatz Sequence generates numbers based on the following algorithm:
 *   n → n/2 (n is even)
 *   n → 3n + 1 (n is odd)
 *
 * 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 *
 * @param {number} num the initial value to begin the Collatz sequence at
 */
export function collatz(num: number): number[] {
  if (num < 1) {
    throw new Error("[Sequence.collatz] num must be >= 1");
  }
  const sequence: number[] = [num];
  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = (num * 3) + 1;
    }
    sequence.push(num);
  }
  return sequence;
}

/**
 * Returns a function that calculates the Collatz Sequence
 * based on the given "seed" value. Will cache previously calculated sequences.
 *
 * The Collatz Sequence generates numbers based on the following algorithm:
 *   n → n/2 (n is even)
 *   n → 3n + 1 (n is odd)
 *
 * 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
 */
export function collatzCacheFunc(): (num: number) => number[] {
  return ((collatzCache: Map<number, number[]>) => {
    return (num: number) => {
      if (num < 1) {
        throw new Error("[Sequence.collatz] num must be >= 1");
      }

      if (collatzCache.has(num)) {
        return collatzCache.get(num) as number[];
      }

      let sequence: number[] = [num];
      const originalNum: number = num;

      while (num > 1) {
        if (collatzCache.has(num)) {
          // only store the values calculated up until now (a "chunk" of the sequence)
          collatzCache.set(originalNum, sequence);

          /*
           * the current number (this chunk's last number) "points" to the next chunk of the sequence,
           * and that chunk may point to another chunk, and so on. Follow the "pointers" until num === 1.
           * This greatly reduces the memory needed, but does not improve compute performance b/c
           * concat() is still adding elements to a new array.
           */
          while (num > 1) {
            sequence.concat((collatzCache.get(num) as number[]).slice(1));
            num = sequence[sequence.length - 1];
          }
        } else {
          if (num % 2 === 0) {
            num /= 2;
          } else {
            num = (num * 3) + 1;
          }
          sequence.push(num);
        }
      }
      return sequence;
    }
  })(new Map<number, number[]>());
}

// Returns an sequence of fibonacci numbers, calculated from start to end.
export function fibonacci(start: number, end: number): number[] {
  let a: number = 0;
  let b: number = 1;

  const sequence: number[] = [];
  while (a <= end) {
    if (a >= start) {
      sequence.push(a);
    }
    const temp: number = b;
    b = a + b;
    a = temp;
  }

  return sequence;
}

// a function that retrieves the number of primes specified
export function primes(numOfPrimes: number): number[] {
  if (numOfPrimes <= 0) { return []; }

  const primesSequence: number[] = [];
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
export function primesRange(start: number, end: number): number[] {
  if (start < 0 || end < 0) {
    throw new Error("[primes] invalid arg: arguments must be > 0");
  }

  if (start > end) {
    throw new Error("[primes] invalid arg: start must be <= end");
  }

  const allPrimes: number[] = [2];
  const sequence: number[] = [];
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

function _isPrimeNumber(num: number, primesList: number[]): boolean {
  let currentPrime: number = 0;
  const maxNumToCheck: number = Math.sqrt(num);
  for (let i: number = 0; currentPrime < maxNumToCheck && i < primesList.length; i++) {
    currentPrime = primesList[i];
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
export function range(start: number, end: number, inclusive = true): number[] {
  if (start > end) {
    throw new Error("[range] invalid arg: end must be greater than start");
  }
  const sequence: number[] = [];
  for (let i: number = start; i < end; i++) {
    sequence.push(i);
  }
  if (inclusive) { sequence.push(end); }
  return sequence;
}
