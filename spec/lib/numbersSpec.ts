import "jasmine";
import * as Numbers from "../../src/lib/numbers";

describe("evens", () => {
  describe("with an array of odd and even numbers", () => {
    it("returns an array of only the evens", () => {
      expect(Numbers.evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    });
  });
});

describe("factors", () => {
  it("returns an array of the numbers factors", () => {
    const valuesToExpectedResults: Map<number, number[]> = new Map([
      [0, []],
      [1, [1]],
      [7, [1, 7]],
      [9, [1, 3, 9]],
      [24, [1, 2, 3, 4, 6, 8, 12, 24]],
      [100, [1, 2, 4, 5, 10, 20, 25, 50, 100]],
    ]);

    valuesToExpectedResults.forEach((expectedResult, value) => {
      expect(Numbers.factors(value)).toEqual(expectedResult);
    });
  });
});

describe("lowestCommonMultiple", () => {
  describe("when the array contains positive integers", () => {
    it("returns the lowest common multiple", () => {
      expect(Numbers.lowestCommonMultiple([45, 30])).toEqual(90);
      expect(Numbers.lowestCommonMultiple([3, 4, 1, 6, 2, 5])).toEqual(60);
    });
  });
});

describe("maxNum", () => {
  describe("with array of numbers", () => {
    it("returns the max number within that array", () => {
      expect(Numbers.maxNum([1, 1, -1, 42, 23, 7])).toEqual(42);
    });
  });
  describe("when array is empty", () => {
    it("throws an error", () => {
      expect(() => Numbers.maxNum([])).toThrowError("[maxNum] invalid argument: array cannot be empty");
    });
  });
});

describe("primeFactors", () => {
  describe("with a non-prime number", () => {
    it("returns the prime factors for that number", () => {
      expect(Numbers.primeFactors(12)).toEqual([2, 2, 3]);
      expect(Numbers.primeFactors(24)).toEqual([2, 2, 2, 3]);
      expect(Numbers.primeFactors(64)).toEqual([2, 2, 2, 2, 2, 2]);
    });
  });
  describe("with a prime number", () => {
    it("returns that number", () => {
      expect(Numbers.primeFactors(17)).toEqual([17]);
    });
  });
  describe("with 1", () => {
    it("returns empty array", () => {
      expect(Numbers.primeFactors(1)).toEqual([]);
    });
  });
  describe("with 2", () => {
    it("returns array with 2", () => {
      expect(Numbers.primeFactors(2)).toEqual([2]);
    });
  });
  describe("when the number is negative", () => {
    it("throws an Error", () => {
      expect(() => Numbers.primeFactors(-1)).toThrowError("[primeFactors] invalid arg: num should be positive number");
    });
  });
});

describe("product", () => {
  it("calculates the product", () => {
    expect(Numbers.product([1, 2, 3, 4, 5])).toEqual(120);
  });
});

describe("productOfSubSlices", () => {
  describe("when slice size is 1", () => {
    it("returns each number unchanged", () => {
      expect(Numbers.productOfSubSlices([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
    });
  });
  describe("when the slice size is between 1 and the length of the array", () => {
    it("returns the product of each subslice", () => {
      expect(Numbers.productOfSubSlices([1, 2, 3, 4, 5], 3)).toEqual([6, 24, 60]);
    });
  });
  describe("when slice size is the size of the array", () => {
    it("it returns the product of all numbers", () => {
      expect(Numbers.productOfSubSlices([1, 2, 3, 4, 5], 5)).toEqual([120]);
    });
  });
  describe("when 0 is within a subslice", () => {
    describe("and when 0 is in middle", () => {
      it("it handles the zero", () => {
        expect(Numbers.productOfSubSlices([1, 2, 3, 0, 5, 6, 7], 3)).toEqual([6, 0, 0, 0, 210]);
      });
    });
    describe("and when 0 is at start", () => {
      it("it handles the zero", () => {
        expect(Numbers.productOfSubSlices([0, 2, 3, 4, 5], 3)).toEqual([0, 24, 60]);
      });
    });
    describe("and when 0 is at the end", () => {
      it("it handles the zero", () => {
        expect(Numbers.productOfSubSlices([1, 2, 3, 4, 0], 3)).toEqual([6, 24, 0]);
      });
    });
  });
});

describe("pythagoreanTriplet", () => {
  describe("when valid args provided", () => {
    it("returns a tuple containing the Pythagorean Triple", () => {
      expect(Numbers.pythagoreanTriplet(2, 1)).toEqual([3, 4, 5]);
    });
  });
  describe("when n >= m", () => {
    it("throws an Error", () => {
      expect(() => Numbers.pythagoreanTriplet(1, 2))
          .toThrowError("[pythagoreanTriplet] invalid arg: n must be less than m");
      expect(() => Numbers.pythagoreanTriplet(1, 1))
          .toThrowError("[pythagoreanTriplet] invalid arg: n must be less than m");
    });
  });
  describe("when n or m >= 0", () => {
    it("throws an Error", () => {
      expect(() => Numbers.pythagoreanTriplet(0, -1))
          .toThrowError("[pythagoreanTriplet] invalid arg: parameters must be greater than 0");
      expect(() => Numbers.pythagoreanTriplet(1, 0))
          .toThrowError("[pythagoreanTriplet] invalid arg: parameters must be greater than 0");
    });
  });
});

describe("sum", () => {
  describe("with an array of numbers", () => {
    it("returns the sum", () => {
      expect(Numbers.sum([1, 2, 3, 4, 5])).toEqual(15);
    });
  });
});
