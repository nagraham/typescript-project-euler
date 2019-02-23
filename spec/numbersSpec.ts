import "jasmine";
import * as Numbers from "../src/numbers";

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
  })
  describe("with a prime number", () => {
    it("returns that number", () => {
      expect(Numbers.primeFactors(17)).toEqual([17]);
    })
  })
  describe("with 1", () => {
    it("returns empty array", () => {
      expect(Numbers.primeFactors(1)).toEqual([]);
    })
  })
  describe("with 2", () => {
    it("returns array with 2", () => {
      expect(Numbers.primeFactors(2)).toEqual([2]);
    })
  })
  describe("when the number is negative", () => {
    it("throws an Error", () => {
      expect(() => { Numbers.primeFactors(-1) }).toThrowError("[primeFactors] invalid arg: num should be positive number")
    });
  });
})
