import "jasmine";
import * as Sequences from "../src/sequences";

describe("fibonacci", () => {
  it("returns array with fibonacci numbers not exceeding 'end' value" , () => {
    expect(Sequences.fibonacci(0, 10)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  }),
  describe("when start greater than 0", () => {
    it("the sequence starts at a number equal to or greater than 'start'", () => {
      expect(Sequences.fibonacci(3, 10)).toEqual([3, 5, 8]);
    });
  });
  describe("when 'end' is a number in the sequence", () => {
    it("the sequence ends at that number", () => {
      expect(Sequences.fibonacci(3, 13)).toEqual([3, 5, 8, 13]);
    });
  });
});

describe("primes", () => {
  describe("from 0 to 20", () => {
    it("returns an array of prime numbers", () => {
      expect(Sequences.primes(0, 20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    });
  });
  describe("when start is a prime and end is a prime", () => {
    it("returns an array of prime numbers including both start and end", () => {
      expect(Sequences.primes(2, 19)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
    });
  });
  describe("when start is greater than 2", () => {
    it("returns an array of prime numbers including both start and end", () => {
      expect(Sequences.primes(4, 8)).toEqual([5, 7])
    });
  });
  describe("preconditions", () => {
    describe("when start > end", () => {
      it("throws an Error", () => {
        expect(() => { Sequences.primes(1, 0) }).toThrowError("Invalid arg: start must be <= end")
      });
    });
    describe("when start < 0", () => {
      it("throws an Error", () => {
        expect(() => { Sequences.primes(-1, 0) }).toThrowError("Invalid arg: arguments must be > 0")
      });
    });
    describe("when end < 0", () => {
      it("throws an Error", () => {
        expect(() => { Sequences.primes(0, -1) }).toThrowError("Invalid arg: arguments must be > 0")
      });
    });
  })
})
