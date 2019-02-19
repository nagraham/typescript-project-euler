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
