
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

// Returns a sequence of prime numbers, from start to end.
// Start should be > 0; start should be <= end
export function primes(start: number, end: number): Array<number> {
  if (start < 0 || end < 0) {
    throw new Error("Invalid arg: arguments must be > 0");
  }

  if (start > end) {
    throw new Error("Invalid arg: start must be <= end");
  }

  let allPrimes: Array<number> = [2];
  let sequence: Array<number> = [];
  if (start <= 2) {
    sequence.push(2);
  }

  for (let candidateNum: number = 3; candidateNum <= end; candidateNum += 2) {
    // run the number through the sieve of primes
    let isPrime: boolean = true;
    let currentPrime: number = 0;
    let maxNumToCheck: number = Math.sqrt(candidateNum);
    for (let i: number = 0; isPrime && currentPrime < maxNumToCheck; i++) {
      currentPrime = allPrimes[i];
      if (candidateNum % currentPrime == 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      allPrimes.push(candidateNum);
      if (candidateNum >= start) {
        sequence.push(candidateNum);
      }
    }
  }

  return sequence;
}
