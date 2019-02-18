import "jasmine";
import * as Sequences from "../src/sequences";

describe("fibonacci", () => {
  it("returns array with correct values" , () => {
    expect(Sequences.fibonacci(0, 10)).toBe([0, 1, 1, 2, 3, 5, 8])
  });
});
