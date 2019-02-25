import "jasmine";
import * as Numbers from "../../src/lib/numbers";

describe("evens", () => {
  describe("with an array of odd and even numbers", () => {
    it("returns an array of only the evens", () => {
      expect(Numbers.evens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    });
  });
});

describe("evens", () => {
  describe("with an array of numbers", () => {
    it("returns the sum", () => {
      expect(Numbers.sum([1, 2, 3, 4, 5])).toEqual(15);
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
      expect(() => { Numbers.maxNum([]) }).toThrowError("[maxNum] invalid argument: array cannot be empty");
    })
  });
})

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
      expect(() => { Numbers.primeFactors(-1) }).toThrowError("[primeFactors] invalid arg: num should be positive number");
    });
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
