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
