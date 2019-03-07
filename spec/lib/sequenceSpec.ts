import "jasmine";
import * as Sequence from "../../src/lib/sequence";

describe("collatz", () => {
  it("returns a Collatz Sequence", () => {
    expect(Sequence.collatz(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    expect(Sequence.collatz(1)).toEqual([1]);
  });

  describe("if the number is less than one", () => {
    [0, -1, -13].forEach((arg) => {
      it("throws an Error", () => {
        expect(() => Sequence.collatz(arg)).toThrowError("[Sequence.collatz] num must be >= 1");
      });
    });
  });
});

describe("collatzFunc", () => {
  it("returns a function that can be used to calculate Collatz sequences", () => {
    const myCollatzFunc: (num: number) => number[] = Sequence.collatzCacheFunc();
    expect(myCollatzFunc(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  });
  // this doesn't test the cache speeds it up; but tests the cache doesn't have a bug
  it("uses a cache for previously calculated collatz numbers", () => {
    const myCollatzFunc: (num: number) => number[] = Sequence.collatzCacheFunc();
    expect(myCollatzFunc(16)).toEqual([16, 8, 4, 2, 1]);
    expect(myCollatzFunc(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
    expect(myCollatzFunc(13)).toEqual([13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
  });
  it("returns sequence if the number was already passed in", () => {
    const myCollatzFunc: (num: number) => number[] = Sequence.collatzCacheFunc();
    expect(myCollatzFunc(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
    expect(myCollatzFunc(10)).toEqual([10, 5, 16, 8, 4, 2, 1]);
  });
})

describe("fibonacci", () => {
  it("returns array with fibonacci numbers not exceeding 'end' value" , () => {
    expect(Sequence.fibonacci(0, 10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });
  describe("when start greater than 0", () => {
    it("the sequence starts at a number equal to or greater than 'start'", () => {
      expect(Sequence.fibonacci(3, 10)).toEqual([3, 5, 8]);
    });
  });
  describe("when 'end' is a number in the sequence", () => {
    it("the sequence ends at that number", () => {
      expect(Sequence.fibonacci(3, 13)).toEqual([3, 5, 8, 13]);
    });
  });
});

describe("primes", () => {
  it("returns an array prime numbers starting from 2 of the specified quantity", () => {
    expect(Sequence.primes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
  it("for size 1 is returns 2", () => {
    expect(Sequence.primes(1)).toEqual([2]);
  });
  it ("returns empty array for sizes less than 1", () => {
    expect(Sequence.primes(0)).toEqual([]);
    expect(Sequence.primes(-1)).toEqual([]);
  });
});

describe("primesRange", () => {
  describe("from 0 to 20", () => {
    it("returns an array of prime numbers", () => {
      expect(Sequence.primesRange(0, 20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe("when start is a prime and end is a prime", () => {
    it("returns an array of prime numbers including both start and end", () => {
      expect(Sequence.primesRange(2, 19)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });
  describe("when start is greater than 2", () => {
    it("returns an array of prime numbers including both start and end", () => {
      expect(Sequence.primesRange(4, 8)).toEqual([5, 7]);
    });
  });
  describe("preconditions", () => {
    describe("when start > end", () => {
      it("throws an Error", () => {
        expect(() => Sequence.primesRange(1, 0)).toThrowError("[primes] invalid arg: start must be <= end");
      });
    });
    describe("when start < 0", () => {
      it("throws an Error", () => {
        expect(() => Sequence.primesRange(-1, 0)).toThrowError("[primes] invalid arg: arguments must be > 0");
      });
    });
    describe("when end < 0", () => {
      it("throws an Error", () => {
        expect(() => Sequence.primesRange(0, -1)).toThrowError("[primes] invalid arg: arguments must be > 0");
      });
    });
  });
});

describe("range", () => {
  describe("with valid start and end", () => {
    describe("no flag", () => {
      it("returns inclusive range", () => {
        expect(Sequence.range(1, 5)).toEqual([1, 2, 3, 4, 5]);
      });
    });
    describe("inclusive flag true", () => {
      it("returns inclusive range", () => {
        expect(Sequence.range(1, 5, true)).toEqual([1, 2, 3, 4, 5]);
      });
    });
    describe("inclusive flag false", () => {
      it("returns exclusive range", () => {
        expect(Sequence.range(1, 5, false)).toEqual([1, 2, 3, 4]);
      });
    });
  });
  describe("when the end > start", () => {
    it("throws an error", () => {
      expect(() => Sequence.range(5, 1)).toThrowError("[range] invalid arg: end must be greater than start");
    });
  });
});
